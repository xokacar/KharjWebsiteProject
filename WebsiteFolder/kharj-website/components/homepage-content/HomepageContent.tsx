import {
	Heading,
	Text,
	VStack,
	Stack,
} from '@chakra-ui/react';
import { AvatarImage } from '../avatar-image/Avatar-Image';
import {WhatAmIDoing} from '../what-am-i-doing/WhatAmIDoing'

export const HomepageContent = () => {
	return (
		<Stack
			as='section'
			alignItems='center'
			direction={{ base: 'column-reverse', md: 'row' }}
			w='full'
			spacing={12}
		>
			<VStack alignItems='flex-start' w='full' spacing={3}>
				<Stack
					alignItems='center'
					justifyContent={{ base: 'center', md: 'flex-start' }}
					direction={{ base: 'column', md: 'row' }}
					w='full'
					spacing={3}
				>
					<Heading as='h1' size='lg'>
						Kharj
					</Heading>
				</Stack>
				<Text as='h2' lineHeight='160%'>
					Hey I'm Kharj and I'm a software engineer. I'm currently working at a
					startup called as a frontend engineer. I'm also a student at the
					University of Turkish Aeronautical Association studying Computer
					Engineer.
				</Text>
				<Stack>
					<WhatAmIDoing />
				</Stack>
			</VStack>
			<AvatarImage />
			
		</Stack>
	);
};
