import { AppProps } from 'next/app'
import '@fortawesome/fontawesome-free/css/all.css';
import '../styles/index.css'

// Lightbox styles
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
