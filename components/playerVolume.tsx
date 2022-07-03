import {
  Box,
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react'
import ReactHowler from 'react-howler' // Audio interface library for React
import { useEffect } from 'react'
import {
  MdVolumeDown,
  MdVolumeMute,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md'

const PlayerVolume = () => {
  const [volume, setVolume] = useState(100)
  const volumeRef = useRef(null) // Reference for React Howler

  // useEffect(() => {})

  const onVolume = (e) => {
    setVolume(parseFloat(e[0]))
    volumeRef.current.seek(e[0])
  }

  return (
    <Box>
      <Box>
        <ReactHowler
          // playing={playing}
          // src={activeSong?.url}
          ref={volumeRef}
          onVolume={onVolume}
        />
      </Box>
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

        {/* <RangeSlider
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
        </RangeSlider> */}

        <Slider
          aria-label="volume-slider"
          defaultValue={1.0}
          step={0.1}
          min={0.0}
          max={1.0}
          id="volume-slider"
          width="100px"
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
