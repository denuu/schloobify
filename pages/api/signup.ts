import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

// Access with httpie in terminal with `http :3000/api/signup user=a@a.com password=whatever`
export default async (req: NextApiRequest, res: NextApiResponse) => {
	const salt = bcrypt.genSaltSync()
	const { email, password } = req.body

	let user

	try {
		user = await prisma.user.create({
			data: {
				email,
				password: bcrypt.hashSync(password, salt),
			},
		})
	} catch (e) {
		res.status(401)
		res.json({ error: 'User already exists' })
		return
	}

	const token = jwt.sign(
		{
			email: user.email,
			id: user.id,
			time: Date.now(),
		},
		'hello', // secret
		{ expiresIn: '8h' },
	)

	res.setHeader(
		'Set-Cookie',
		cookie.serialize('SCHLOOBIFY_ACCESS_TOKEN', token, {
			httpOnly: true,
			maxAge: 8 * 60 * 60,
			path: '/',
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production',
		})
	)

	res.json(user)
}