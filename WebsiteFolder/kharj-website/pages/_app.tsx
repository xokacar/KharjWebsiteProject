import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import baseTheme  from "../utils/theme";
import { Chakra } from "../Chakra";
import { NavigationBar } from './NavigationBar';


const theme = extendTheme({ baseTheme })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <NavigationBar/>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default MyApp

