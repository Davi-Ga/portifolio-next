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
});

export default theme;