declare global {
  interface Window {
    kakao: any
  }
}

export interface MapProps {
  latitude: number
  longitude: number
}

export interface EmployDetailProps {
  id: number
  title: string
  img1: string
  img2?: string | null
  img3?: string | null
  centent: string
  support_bool: boolean
  user: {
    id: number
    username: string
    location: string
  }
  date: Date | '상시'
  B_job: string
  job: string
}

export interface DetailBoxProps {
  title: string
  support_boool: boolean
}

export interface ApplyBoxProps {
  resume: number
  phone: number
  email: string
}
