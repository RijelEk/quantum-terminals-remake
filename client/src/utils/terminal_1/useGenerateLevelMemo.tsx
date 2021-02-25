import { rules } from '@/utils/terminal_1/rules/rule'
import { getRandomIntInclusive } from '@/utils/random'

const size: number = 30

export const isStartOfTheRow = (number: number): boolean => {
  return (number - 1) % 5 === 0
}
export const isEndOfTheRow = (number: number): boolean => {
  return number % 5 === 0
}

export const getPossibilities = (number: number): number[] => {
  let possibilities = []
  if (isStartOfTheRow(number)) {
    possibilities.push(
      number + 1,
      number + 5,
      number - 5,
      number - 4,
      number + 6,
    )
  } else if (isEndOfTheRow(number)) {
    possibilities.push(
      number - 1,
      number + 5,
      number - 5,
      number - 6,
      number + 4,
    )
  } else {
    possibilities.push(
      number + 1,
      number - 1,
      number - 5,
      number + 5,
      number - 5,
      number + 6,
      number - 6,
      number + 4,
      number - 4,
    )
  }
  return possibilities
}

export const filterPossibilities = (
  possibilities: number[],
  avoid: number[],
): number[] => {
  const filter_range = possibilities.filter((el) => el > 0 && el < size) // our of range
  const filter_avoid = filter_range.filter((val) => !avoid.includes(val)) // not in avoid list

  return filter_avoid
}

export const generateNext = (number: number, avoid: number[]): number => {
  const possibilities: number[] = getPossibilities(number)
  const filtered: number[] = filterPossibilities(possibilities, avoid) // filter possibilities
  const random: number = getRandomIntInclusive(0, filtered.length - 1)
  const selected_possibility: number = filtered[random]

  return selected_possibility
}

const generateLevelMemo = (player_level: number | string) => {
  /* Variables */
  const current_rule = rules.find((el) => el.level === player_level)
  let level_arr: number[] = []
  let avoid: number[] = []
  let number_of_tiles: number = current_rule.level

  /** @LevelGenerator */

  /* Previous Step */
  let previous_step: number | null = null

  /* Get First Tile */
  let first_tile = getRandomIntInclusive(1, 30)
  level_arr.push(first_tile)
  avoid.push(first_tile)
  previous_step = first_tile

  /* Get the next step */
  for (let i = 0; i <= number_of_tiles; i++) {
    const next = generateNext(previous_step, avoid)

    level_arr.push(next)
    avoid.push(next)

    previous_step = next
  }

  return level_arr
}

export default generateLevelMemo
