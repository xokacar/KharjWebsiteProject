/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// Next
import type { AppProps } from 'next/app';

// Chakra
import { Chakra } from '../Chakra';

//Vercel
import { Analytics } from '@vercel/analytics/react';

//Components
import { NavigationBar } from '../components/common/navigation-bar/NavigationBar';
import { Layout } from '../components/common/layout/index';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<NavigationBar />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</Chakra>
	);
}

export default MyApp;
