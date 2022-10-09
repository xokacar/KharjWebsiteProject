import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Dict } from '@chakra-ui/utils';
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: true,
};

export const anatheme = extendTheme({
	config,
	styles: {
		global: (props: Dict<unknown> | StyleFunctionProps) => ({
			body: {
				bg: mode('#ffffff', '#1a202c')(props),
			},
		}),
	},
});

const baseTheme = extendTheme({ config });

export default baseTheme;
