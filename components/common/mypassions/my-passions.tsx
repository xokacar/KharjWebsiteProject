// React
import React, { ReactElement } from 'react';

// Chakra UI
import {
	Flex,
	Box,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
	Icon,
	Heading,
} from '@chakra-ui/react';

// Mui Icons
import LaptopWindowsRoundedIcon from '@mui/icons-material/LaptopWindowsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';

// TODO : Take feature props to a dif file
interface FeatureProps {
	title: string;
	text: string;
	icon?: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack>
			<Flex
				w={16}
				h={16}
				align={'center'}
				justify={'center'}
				color={'white'}
				rounded={'full'}
				bg={useColorModeValue('gray.400', 'gray.900')} //TODO bg kalkacak iconlara color atanacak
				mb={1}
			>
				{icon}
			</Flex>
			<Text fontWeight={600}>{title}</Text>
			<Text color={'gray.600'}>{text}</Text>
		</Stack>
	);
};

export const MyPassions = () => {
	return (
		<Box py={8}>
			<Heading as='h2' size='md' letterSpacing='wider' mb={6}>
				My Passions
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				<Feature
					icon={<Icon as={LaptopWindowsRoundedIcon} w={8} h={8} />}
					title='Frontend Development'
					text='I am passionate about frontend development. I enjoy creating beautiful and responsive websites using React, TypeScript, and Next.js.'
				/>
				<Feature
					icon={<Icon as={DesignServicesRoundedIcon} w={8} h={8} />}
					title='UI/UX Design'
					text='I also have a passion for UI/UX design. I love creating visually appealing designs for websites using Figma and Adobe XD.'
				/>
				<Feature
					icon={<Icon as={MusicNoteRoundedIcon} w={8} h={8} />}
					title='Music Production'
					text='In addition to my tech skills, I enjoy music production. I love creating beats and Deephouse tracks using FL Studio.'
				/>
			</SimpleGrid>
		</Box>
	);
};
