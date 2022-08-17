import type { AppProps } from 'next/app'
import { extendTheme } from '@chakra-ui/react'
import baseTheme  from "../utils/theme";
import { Chakra } from "../Chakra";
import { NavigationBar } from '../components/NavigationBar';
import {Main } from '../components/Main'
import { HomepageContent } from '../components/homepage-content/HomepageContent'
import {Layout } from '../components/layout'

const theme = extendTheme({ baseTheme })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <NavigationBar/>
      <Layout>
      <Main/>
      <HomepageContent/>
      </Layout>
      <Component {...pageProps} />
    </Chakra>
  )
}

export default MyApp

