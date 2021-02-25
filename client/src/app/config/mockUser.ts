import { v4 } from 'uuid'

export const mockUser: mockUser = {
  username: 'anonimoususer-' + v4(),
  avatarId: null,
  email: 'anonim@anonim.com',
  password: 'password',
}

export const mockGame: mockGame[] = [
  {
    title: 'memo',
    score: 0,
    level: 1,
  },
]
