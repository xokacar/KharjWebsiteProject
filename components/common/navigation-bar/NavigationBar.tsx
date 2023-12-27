// React
import * as React from 'react';

// Chakra UI
import {
	Box,
	useColorModeValue,
	Container,
	Image,
	Flex,
	Text,
} from '@chakra-ui/react';

// Router
import Link from 'next/link';

// Components
import { ThemeChanger } from '../theme-toggle/ThemeChanger';

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
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Image
						maxBlockSize='50px'
						objectFit='contain'
						src={KharjLogo}
						alt='kharjlogo'
					/>
				</Flex>
				<Flex>
					<Link href='/' passHref>
						<Text as='a' mx={2}>
							Home
						</Text>
					</Link>
				</Flex>
				<ThemeChanger />
			</Container>
		</Box>
	);
};
