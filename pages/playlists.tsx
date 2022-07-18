import { Box, Text, Flex, LinkBox } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'
import NextLink from 'next/link'
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
      <Box color="white">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Your Playlists
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex display="inline-flex" flexFlow="row wrap" gap="20px 0px">
          {playlists.map((playlist) => (
            <LinkBox paddingX="10px" width="20%" cursor="pointer">
              <NextLink
                href={{
                  pathname: '/playlist/[id]',
                  query: { id: playlist.id },
                }}
                passHref
              >
                <Box key={playlist.id}>
                  <Box
                    bg="grey.900"
                    borderRadius="6px"
                    padding="15px"
                    sx={{
                      '&:hover': {
                        bg: 'green.300',
                        color: 'black',
                      },
                    }}
                  >
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
              </NextLink>
            </LinkBox>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  )
}

export default Playlists
