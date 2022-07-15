import { Box, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import { MdPlaylistPlay } from 'react-icons/md'
import GradientLayout from '../components/gradientLayout'
import { usePlaylist } from '../lib/hooks'

const Playlists = () => {
  const { playlists } = usePlaylist()

  return (
    <GradientLayout
      color="orange"
      subtitle="playlist"
      title="Playlists"
      description="Playlists you've created or followed"
      image={null}
      icon={MdPlaylistPlay}
      roundImage={false}
    >
      <Box color="white" paddingY="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Your Playlists
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {playlists.map((playlist) => (
            <Box paddingX="10px" width="20%" key={playlist.id}>
              <Box bg="grey.900" borderRadius="4px" padding="15px">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{playlist.name}</Text>
                  <Text fontSize="x-small">Playlist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export default Playlists
