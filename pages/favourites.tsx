import { Box } from '@chakra-ui/layout'
import { MdFavorite } from 'react-icons/md'
import GradientLayout from '../components/gradientLayout'

const Favourites = () => {
  return (
    <GradientLayout
      color="green"
      subtitle="playlist"
      title="Favourites"
      description="The ones you've clicked the heart button on"
      image={null}
      icon={MdFavorite}
      roundImage={false}
    >
      <Box color="white">Under construction</Box>
    </GradientLayout>
  )
}

export default Favourites
