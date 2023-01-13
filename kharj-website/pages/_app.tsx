/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { AppProps } from 'next/app';
import { extendTheme } from '@chakra-ui/react';
import baseTheme from '../utils/theme';
import { Chakra } from '../Chakra';
import { NavigationBar } from '../components/navigation-bar/NavigationBar';
import { Main } from '../components/Main';
import { HomepageContent } from '../components/homepage-content/HomepageContent';
import { Layout } from '../components/layout/index';
import { Analytics } from '@vercel/analytics/react';


const theme = extendTheme({ baseTheme });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Chakra cookies={pageProps.cookies}>
			<NavigationBar />
			<Layout>
				<Main />
				<HomepageContent />
			</Layout>
			<Analytics />
			<Component {...pageProps} />
		</Chakra>
	);
}

export default MyApp;
