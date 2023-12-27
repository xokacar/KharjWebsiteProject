// React
import React from 'react';

// Chakra UI
import { Box, VStack, Divider, Stack, Text } from '@chakra-ui/react';

export const Footer = () => {
	return (
		<VStack as='footer' alignItems='flex-start' pb={8} spacing={8}>
			<Divider />
			<Stack
				alignItems='center'
				justifyContent={{ base: 'center', md: 'space-between' }}
				direction={{ base: 'column', md: 'row' }}
				gridRowGap={4}
				w='full'
				spacing={0}
			>
				<Box>© Okay Kacar Kharj {new Date().getFullYear()}</Box>
				<Text>All rights reserved.</Text>
			</Stack>
		</VStack>
	);
};
