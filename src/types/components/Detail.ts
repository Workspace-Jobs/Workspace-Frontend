declare global {
  interface Window {
    kakao: any
  }
}

export interface MapProps {
  latitude: number
  longitude: number
}
