import { validateToken } from '../../lib/auth'
import prisma from '../../lib/prisma'

const Playlist = ({ playlist }) => {
  return <div>{playlist.name}</div>
}

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.SCHLOOBIFY_ACCESS_TOKEN)
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id, // id of Playlist (unique), in url, + converts string to number
      userId: id, // signed in User ID to prevent access without being signed in.
    },
    include: {
      // or 'select'
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  })

  return {
    props: { playlist },
  }
}

export default Playlist
