import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { artistsData } from './songsData'

const prisma = new PrismaClient()

// Executed when runninng seed command. View relations in db with `npx prisma studio`.
const run = async () => {
	await Promise.allSettled(artistsData.map(async (artist) => {
		return prisma.artist.upsert({ // update or insert
			where: { name: artist.name },
			update: {},
			create: {
				name: artist.name,
				songs: {
					create: artist.songs.map(song => ({
						name: song.name,
						duration: song.duration,
						url: song.url,
					})),
				},
			},
		})
	}))

	const salt = bcrypt.genSaltSync()
	const user = await prisma.user.upsert({
		where: { email: 'user@test.com' },
		update: {},
		create: {
			email: 'user@test.com',
			password: bcrypt.hashSync('password', salt),
			firstName: 'Denis',
			lastName: 'Nossevitch',
		},
	})

	const songs = await prisma.song.findMany({})
	await Promise.all(new Array(10).fill(1).map(async (_, i) => {
		return prisma.playlist.create({ // Create instead of upset because only unique is ID which hasn't been created yet.
			data: {
				name: `Playlist ${i + 1}`,
				user: {
					connect: { id: user.id },
				},
				songs: {
					connect: songs.map(song => ({
						id: song.id,
					})),
				},
			},
		})
	}))
}


run()
	.catch((e) => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})