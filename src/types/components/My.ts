export interface StatusListProps {
  id: number
  employment: {
    id: number
    title: string
    user: string
  }
  date: string
}

export interface BookmarkListProps {
  id: number
  employment: {
    id: number
    title: string
    img1: string
    user: {
      id: number
      username: string
      location: string
    }
    date: string
  }
}

export interface LikeListProps {
  id: number
  nb: {
    id: number
    user: number
    title: string
    good_cnt: number
    created_date: string
  }
}

export interface MynbListProps {
  id: number
  user: number
  title: string
  good_cnt: number
  created_date: string
}
