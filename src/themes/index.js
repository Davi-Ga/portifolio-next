import { extendTheme } from '@chakra-ui/react';

import config from './config';
import styles from './styles';
const theme = extendTheme({
  config,
  styles,

  components: {
   
  },
  colors: {

    gargoyle: '#FFD93D',
    raisin: '222222',
    mint: '#F4FEFD'

    },
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Manrope', sans-serif`,
    text: `'Manrope', sans-serif`,
  },
});

export default theme;