import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import baseTheme  from "../utils/theme";
import { Chakra } from "../Chakra";
import { NavigationBar } from '../components/NavigationBar';
import { Container } from '@chakra-ui/react';
import {Main } from '../components/Main'
import { HomepageTitle } from '../components/homepage-title/HomepageTitle'

const theme = extendTheme({ baseTheme })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <NavigationBar/>
      <Main/>
      <HomepageTitle/>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default MyApp

