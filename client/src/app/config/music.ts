export const MUSIC_FOLDER: string = '/public/music'
export const MENU_MUSIC_PATH: string = `${MUSIC_FOLDER}/intro.mp3`

export const Music: Music[] = [
  {
    title: 'Menu',
    path: MENU_MUSIC_PATH,
  },
]

const GetMusic = (name: string): Music => {
  return Music.find((el) => el.title == name)
}

export default GetMusic
