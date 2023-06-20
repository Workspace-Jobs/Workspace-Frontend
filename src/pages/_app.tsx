import '../styles/globals'
import type { AppProps } from 'next/app'
import GlobalStyle, { Palette } from '../styles/globals'
import { RecoilRoot } from 'recoil'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        autoClose={700}
        pauseOnHover={true}
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
        toastStyle={{
          backgroundColor: Palette.WHITE,
          color: Palette.BLACK,
        }}
      />
    </RecoilRoot>
  )
}
