// NOTE: Chakra UI allows for css properties as props on components.
import { Box } from '@chakra-ui/layout'
import Sidebar from '../components/sidebar'
import PlayerBar from './playerBar'

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="relative" top="0" width="100%" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="0" marginBottom="100px">
        <Box height="calc(100vh - 100px)">{children}</Box>
      </Box>
      <Box position="absolute" left="0" bottom="0">
        <PlayerBar />
      </Box>
    </Box>
  )
}

export default PlayerLayout
