import styled from '@emotion/styled'
import { useEffect } from 'react'
import { MapProps } from 'types/components/Detail'

function Map({ latitude, longitude }: MapProps) {
  useEffect(() => {
    const mapScript = document.createElement('script')

    mapScript.async = true
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`

    document.head.appendChild(mapScript)

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map')
        const mapOptions = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        }
        const map = new window.kakao.maps.Map(mapContainer, mapOptions)
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        })
        marker.setMap(map)
      })
    }
    mapScript.addEventListener('load', onLoadKakaoMap)

    return () => mapScript.removeEventListener('load', onLoadKakaoMap)
  }, [latitude, longitude])

  return <MapContainer id="map" />
}

const MapContainer = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 4px;
`

export default Map
