export interface ButtonStyleProps {
  active?: boolean
  content?: string
  color: string
  onClick?: () => void
}

export interface CommunityListProps {
  id: number
  user: number
  title: string
  good_cnt: number
  created_date: string
}

export interface CommunitylistType {
  list: CommunityListProps[] | undefined
}

export interface CommunityDetailProps {
  id: number
  user: number
  title: string
  centent: string
  tag: string
  good_cnt: number
  good_bool: boolean
  created_date: string
  updated_data: string
}

export interface CommunityForm {
  title?: string
  content?: string
}

export interface CommentListProps {
  id: number
  user: string
  nb: number
  date: string
  centent: string
}
