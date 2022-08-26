import {
	Menu,
	MenuItem,
	Box,
	useColorModeValue,
	Stack,
	IconButton,
	useDisclosure,
	Container,
} from '@chakra-ui/react';
import * as React from 'react';
import { ThemeChanger } from './theme-toggle/ThemeChanger';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

export const NavigationBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('gray.100', 'gray.900')}
			zIndex={2}
			px={4}
		>
			<Container
				display='flex'
				p={2}
				maxW='container.md'
				flexWrap='wrap'
				alignItems='center'
				justify-content='space-between'
			>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				>
					<Menu>
							<MenuItem>Home</MenuItem>
					</Menu>
				</Stack>
				<ThemeChanger />
				<IconButton
					size={'md'}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={'Open Menu'}
					display={{ md: 'none' }}
					onClick={isOpen ? onClose : onOpen}
				/>
			</Container>
		</Box>
	);
};
