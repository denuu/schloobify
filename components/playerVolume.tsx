import {
  Box,
  Flex,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import {
  MdVolumeDown,
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md'
import { useStoreActions } from 'easy-peasy'

const PlayerVolume = ({ volume }) => {
  const setVolume = useStoreActions((state: any) => state.changeVolume)

  useEffect(() => {
    setVolume(volume)
  }, [setVolume, volume])

  return (
    <Box>
      <Flex justify="flex-end" align="center">
        <IconButton
          outline="none"
          variant="link"
          aria-label="volume down"
          fontSize="24px"
          color="grey.600"
          // onClick={onShuffle}
          icon={<MdVolumeDown />}
        />

        <Slider
          aria-label="volume-slider"
          defaultValue={1.0}
          step={0.05}
          min={0.0}
          max={1.0}
          id="volume-slider"
          width="100px"
          value={volume}
          onChange={(e) => {
            setVolume(parseFloat(e))
          }}
        >
          <SliderTrack bg="grey.800">
            <SliderFilledTrack bg="green.300" />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <IconButton
          outline="none"
          variant="link"
          aria-label="volume down"
          fontSize="24px"
          color="grey.600"
          // onClick={onShuffle}
          icon={<MdVolumeUp />}
        />
      </Flex>
    </Box>
  )
}

export default PlayerVolume
