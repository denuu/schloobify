import GradientLayout from '../../components/gradientLayout'
import SongTable from '../../components/songsTable'
import { validateToken } from '../../lib/auth'
import prisma from '../../lib/prisma'

// Random colour for playlists
const getBGColor = (id) => {
  const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'purple',
    'grey',
    'teal',
    'yellow',
  ]

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)]
}

const Playlist = ({ playlist }) => {
  const color = getBGColor(playlist.id)
  return (
    <GradientLayout
      color={color}
      // children={undefined}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      subtitle="playlist"
      title={playlist.name}
      description={`${playlist.songs.length} songs`}
      roundImage={false}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  )
}

export const getServerSideProps = async ({ query, req }) => {
  // Get valid user data, else redirect to signin
  let user
  try {
    user = validateToken(req.cookies.SCHLOOBIFY_ACCESS_TOKEN)
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin',
      },
    }
  }

  // const { id } = validateToken(req.cookies.SCHLOOBIFY_ACCESS_TOKEN)
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id, // id of Playlist (unique), in url, + converts string to number
      userId: user.id, // signed in User ID to prevent access without being signed in.
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
