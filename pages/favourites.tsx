import { Box } from '@chakra-ui/layout'
import { MdFavorite } from 'react-icons/md'
import GradientLayout from '../components/gradientLayout'

const Favourites = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="<3"
      title="Favourites"
      description="The ones you've clicked the heart button on"
      image=""
      roundImage={false}
    >
      <Box color="white" paddingY="40px">
        Under construction
      </Box>
    </GradientLayout>
  )
}

export default Favourites
