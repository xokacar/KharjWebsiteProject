import { 
	Box,
	useColorModeValue,
	Stack,
	IconButton,
	useDisclosure,
	Container,
	Flex,
	Heading,
	HStack
} from '@chakra-ui/react';
import * as React from 'react';
import { ThemeChanger } from '../theme-toggle/ThemeChanger';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export const NavigationBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const NavbarItems = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];
	return (
		<Box
			position='fixed'
			as='nav'
			w='100%'
			bg={useColorModeValue('gray.100', 'gray.900')}
			zIndex={2}
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
					{NavbarItems.map(({ href, name }) => (
						<NextLink href={href} key={name}>
							{name}
						</NextLink>
					))}

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
