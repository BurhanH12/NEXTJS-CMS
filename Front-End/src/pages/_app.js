import '@/styles/globals.css'
import Sidebar from 'components/Sidebar'
import 'react-quill/dist/quill.snow.css'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {


  return (
    <>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      
    </>
)
}
