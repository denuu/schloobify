import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
	const favourites = await prisma.favourites.findMany({
		where: {
			userId: user.id,
		},
	})

	res.json(favourites)
})