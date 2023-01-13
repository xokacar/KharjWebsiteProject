import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ThemeChanger = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label='toggle theme'
			onClick={toggleColorMode}
			icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
		>
			<MoonIcon />
		</IconButton>
	);
};
