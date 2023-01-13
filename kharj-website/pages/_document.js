/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../utils/theme';
export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='shortcut icon' href='/static/favicon.ico' />
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
