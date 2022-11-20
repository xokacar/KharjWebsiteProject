import {
	Box,
	useColorModeValue,
	Stack,
	Container,
	Image,
	Flex,
	Text,
} from '@chakra-ui/react';
import * as React from 'react';
import { ThemeChanger } from '../theme-toggle/ThemeChanger';
import NextLink from 'next/link';

export const NavigationBar = () => {
	const KharjLogo = useColorModeValue(
		'https://user-images.githubusercontent.com/44809357/202858033-ac8adb8d-0e15-4931-ae46-5b1afe4f617a.png',
		'https://user-images.githubusercontent.com/44809357/202858042-69621106-4e17-4d17-a43d-8e7e16929759.png'
	);

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
				{/* <Stack
					direction={{ base: 'column', md: 'row' }}
					display={{ base: 'none', md: 'flex' }}
					width={{ base: 'full', md: 'auto' }}
					alignItems='center'
					flexGrow={1}
					mt={{ base: 4, md: 0 }}
				> */}

				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Image
						maxBlockSize='50px'
						objectFit='contain'
						src={KharjLogo}
						alt='kharjlogo'
					/>
				</Flex>
				{/* {NavbarItems.map(({ href, name }) => (
						<NextLink href={href} key={name}>
							{name}
						</NextLink>
					))} */}

				<ThemeChanger />
			</Container>
		</Box>
	);
};
