import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {indigo} from "@mui/material/colors";

const inter = Inter({subsets: ['latin']});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1'
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
  }
});

export default theme;