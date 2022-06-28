import {
  Box,
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react'
import {
  MdVolumeDown,
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md'

const PlayerVolume = () => {
  return (
    <Box>
      <Flex justify="flex-end" align="center">
        <IconButton
          outline="none"
          variant="link"
          aria-label="volume down"
          fontSize="24px"
          // color={shuffle ? 'white' : 'grey.600'}
          // onClick={onShuffle}
          icon={<MdVolumeDown />}
        />
        <RangeSlider
          aria-label={['0%', '100%']}
          step={0.1}
          min={0}
          max={100}
          id="volume-range"
          // value={}
          // onChange={onSeek}
          // onChangeStart={() => setIsSeeking(true)}
          // onChangeEnd={() => setIsSeeking(false)}
          width="100px"
        >
          <RangeSliderTrack bg="grey.800">
            <RangeSliderFilledTrack bg="grey.600" />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
        </RangeSlider>
        <IconButton
          outline="none"
          variant="link"
          aria-label="volume down"
          fontSize="24px"
          // color={shuffle ? 'white' : 'grey.600'}
          // onClick={onShuffle}
          icon={<MdVolumeUp />}
        />
      </Flex>
    </Box>
  )
}

export default PlayerVolume
