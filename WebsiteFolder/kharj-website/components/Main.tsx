import Head from 'next/head'
import {Box } from '@chakra-ui/react'

export const Main = () => {
    return(
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, inital-scale=1'></meta>
                <title>Kharj | Homepage</title>
            </Head>
        </Box>
    )
} 