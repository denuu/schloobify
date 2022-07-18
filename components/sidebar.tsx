import NextLink from 'next/link'
import {
  Box,
  List,
  ListItem,
  ListIcon,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
} from '@chakra-ui/layout'
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
  MdPlaylistPlay,
} from 'react-icons/md'
import { Icon } from '@chakra-ui/react'

const navMenu = [
  {
    name: 'Home',
    icon: MdHome,
    route: '/',
  },
  {
    name: 'Library',
    icon: MdLibraryMusic,
    route: '/library',
  },
  {
    name: 'Favourites',
    icon: MdFavorite,
    route: '/favourites',
  },
  {
    name: 'Playlists',
    icon: MdPlaylistPlay,
    route: '/playlists',
  },
  {
    name: 'Create Playlist',
    icon: MdPlaylistAdd,
    route: '/',
  },
  {
    // name: 'Search',
    icon: MdSearch,
    route: '/search',
  },
]

const Sidebar = () => {
  return (
    <Box width="100%" bg="black" paddingX="5px" paddingY="0.5rem" color="white">
      <Box height="100%">
        <Box>
          <Flex
            flexFlow="row nowrap"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box paddingX="20px">
              {/* <Box width="120px" marginBottom="20px" paddingX="20px"> */}
              {/* <NextImage src="/logo.svg" height="60px" width="120px" /> */}
              <Text fontSize="2xl" fontWeight="bold" color="white">
                {`Schloob)))`}
              </Text>
            </Box>
            {navMenu.map((menu) => (
              <Box paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <Icon as={menu.icon} color="white" marginRight="20px" />
                      {menu?.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
