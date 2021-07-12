import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import 'swiper/swiper-bundle.min.css';
import '../styles/swiper.css';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
