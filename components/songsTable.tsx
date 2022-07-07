import { Box } from '@chakra-ui/layout'
import { Table, Thead, Th, Tr, Td, Tbody, IconButton } from '@chakra-ui/react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { formatDate, formatTime } from '../lib/formatters'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { MdFavorite } from 'react-icons/md'
import { prisma } from '@prisma/client'
import React from 'react'
import { useMe } from '../lib/hooks'

const SongTable = ({ songs }) => {
  const playSongs = useStoreActions((store: any) => store.changeActiveSongs)
  const setActiveSong = useStoreActions((store: any) => store.changeActiveSong)

  // setActiveSong changes this but one on initial render.
  const activeSong = useStoreState((state: any) => state.activeSong)

  const handlePlay = (activeSong?) => {
    setActiveSong(activeSong || songs[0])
    playSongs(songs)
  }

  const handleFavourite = async (e: React.SyntheticEvent, song) => {
    e.preventDefault()
    try {
      const body = { songId: song.id }
      await fetch('/api/favourite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      // await Router.push('/') // Need to navigate to see fav?
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" marginBottom="20px">
        <Box marginBottom="30px">
          <IconButton
            icon={<BsFillPlayFill fontSize="30px" />}
            aria-label="play"
            colorScheme="green"
            size="lg"
            isRound
            onClick={() => handlePlay()}
          />
          <Table variant="unstyled">
            <Thead
              borderBottom="1px solid"
              borderColor="rgba(255, 255, 255, 0.2)"
            >
              <Tr>
                <Th>#</Th>
                <Th>Title</Th>
                <Th>Date Added</Th>
                <Th width="20px"></Th>
                <Th>
                  <AiOutlineClockCircle />
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {songs.map((song, i) => (
                <Tr
                  sx={{
                    transition: 'all .3s',
                    '&:hover': {
                      bg: 'rgba(255, 255, 255, 0.75)',
                      color: 'grey.800',
                    },
                  }}
                  key={song.id}
                  cursor="pointer"
                  onClick={() => handlePlay(song)}
                  color={activeSong?.id === song?.id ? 'black' : 'white'}
                  backgroundColor={
                    activeSong?.id === song?.id ? 'white' : 'clear'
                  }
                  // {...song}
                >
                  <Td borderRadius="8px 0 0 8px">{i + 1}</Td>
                  <Td>{song.name}</Td>
                  <Td>{formatDate(song.createdAt)}</Td>
                  <Td>
                    <IconButton
                      icon={
                        <MdFavorite
                          fill="rgba(255, 255, 255, 0.1)"
                          size="18px"
                        />
                      }
                      aria-label="favourite"
                      size="sm"
                      variant="ghost"
                      isRound
                      sx={{
                        '&:hover': {
                          background: 'transparent',
                          svg: {
                            fill: 'red.300',
                            opacity: 0.6,
                          },
                        },
                        '&:focus': {
                          background: 'transparent',
                          svg: {
                            fill: 'red',
                          },
                        },
                      }}
                      onClick={(e) => handleFavourite(e, song)}
                    />
                  </Td>
                  <Td borderRadius="0 8px 8px 0">
                    {formatTime(song.duration)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}

export default SongTable
