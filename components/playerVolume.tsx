import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'

const PlayerVolume = () => {
  return (
    <Box>
      <Box>
        <RangeSlider>
          <RangeSliderTrack bg="grey.800">
            <RangeSliderFilledTrack bg="grey.600" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
        </RangeSlider>
      </Box>
    </Box>
  )
}

export default PlayerVolume
