// Chakra UI
import { Box } from '@chakra-ui/react';

// Next
import Head from 'next/head';

export const Main = () => {
	return (
		<Box as='main' pb={8}>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, inital-scale=1'
				></meta>
				<title>Okay Kacar</title>
			</Head>
		</Box>
	);
};
