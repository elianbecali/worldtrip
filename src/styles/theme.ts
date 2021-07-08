import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: '#FFBA08',
    dark: {
      heading: '#47585B',
      info: '#999999'
    },
    light: {
      heading: '#F5F8FA',
      info: '#DADADA'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  }
});
