import React, { useEffect, useState } from 'react'
import useGenerateLevelMemo from '@/utils/terminal_1/useGenerateLevelMemo'
import { Board, Cell } from '@/UI/Terminals/Terminal_1/Board'

const Memo = () => {
  const size = 30 // size of the map
  const CURRENT__GAME = 'memo'

  const [loading, setLoading] = useState<boolean>(true)
  const [level, setLevel] = useState(null)

  const mockedGame: mockGame[] = JSON.parse(localStorage.getItem('game'))

  useEffect(() => {
    let result = [undefined]

    if (mockedGame) {
      /* Get anonim user level */
      const currentGame = mockedGame.find(
        (game) => game.title === CURRENT__GAME,
      )
      const { level } = currentGame
      /* Generate level */
      do {
        const level_get = useGenerateLevelMemo(level)
        result = [...level_get]

        if (!level_get.includes(undefined)) {
          setLoading(false)
          setLevel(level_get)
        }
      } while (result.includes(undefined))
    }
  }, [])

  const CellGen = () => {
    let components = []
    for (let i = 1; i < size + 1; i++) {
      components = [
        ...components,
        <Cell
          key={i}
          data-attr={i}
          active={level.includes(i)}
          first={level[0] === i}
        >
          {level.includes(i) ? level.indexOf(i) : ''}
        </Cell>,
      ]
    }
    return components
  }

  if (loading) {
    return <div>Loading ...</div>
  }

  return (
    <div>
      <Board>{CellGen().map((el) => el)}</Board>
    </div>
  )
}

export default Memo
