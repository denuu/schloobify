import useSWR from 'swr'
import fetcher from './fetcher'

// SWR cleans and dedupes async request, ensures only **one** is sent.

export const useMe = () => {
	const { data, error } = useSWR('/me', fetcher)

	return {
		user: data,
		isLoading: !data && !error,
		isError: error,
	}
}

export const usePlaylist = () => {
	const { data, error } = useSWR('/playlist', fetcher)

	return {
		playlists: (data as any) || [], // TODO: clean up typing
		isLoading: !data && !error,
		isError: error,
	}
}

export const useFavourites = () => {
	const { data, error } = useSWR('/favourite', fetcher)

	return {
		favourites: (data as any) || [],
		isLoading: !data && !error,
		isError: error,
	}
}