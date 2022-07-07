// import { getSession } from 'next-auth/react';
import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
	// const favourites = await prisma.favourite.findMany({
	// 	where: {
	// 		userId: user.id,
	// 	},
	// })
	// res.json(favourites)
	const { songId } = req.body

	// const session = await getSession({ req })
	const result = await prisma.favourite.create({
		data: {
			songId,
			userId: user.id,
		},
	})
	res.json(result)
})
