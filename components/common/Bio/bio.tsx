// React
import React from 'react';

//Chakra UI
import { Heading, Text, Link, HStack, Stack, Center } from '@chakra-ui/react';

// Styles
import { BioSection, BioYear } from './styles';

// Components
import { Section } from '../layout/section';
import { AvatarImage } from '../avatar-image/Avatar-Image';

export const Bio = () => {
	return (
		<Section>
			<Heading as='h1' size='lg' letterSpacing='wider'>
				Kharj (Okay Kacar)
			</Heading>
			<HStack alignItems='flex-start' w='full' spacing={4} marginBlock={5}>
				{/* TODO	 <AvatarImage /> */}
				<Text as='h2' lineHeight='170%'>
					Hey I&apos;m Okay Kacar and I&apos;m a software engineer. I have
					graduated University of Turkish Aeronautical Association. I&apos;m
					currently working at a firm called as NTT DATA as a software engineer
					specializing in Frontend and Devops Engineering.
				</Text>
			</HStack>
			<Heading as='h2' size='md' letterSpacing='wider' lineHeight='taller'>
				Bio
			</Heading>
			<BioSection lineHeight='taller'>
				<BioYear>2023-Q2 </BioYear>
				Graduated from UTAA. Currently working as a Software Engineer at{' '}
				<Link href='https://nttdata-solutions.com' isExternal color='blue.500'>
					NTT DATA
				</Link>
				, specializing in React Native and Expo.
			</BioSection>
			<BioSection lineHeight='taller'>
				<BioYear>2022-Q4 </BioYear>
				Working as a Software Engineer at{' '}
				<Link href='https://nttdata-solutions.com' isExternal color='blue.500'>
					NTT DATA
				</Link>{' '}
				and Senior Student.
			</BioSection>
			<BioSection lineHeight='taller'>
				<BioYear>2022-Q2</BioYear>
				Working as a Frontend Developer at Pavza and Senior Student.
			</BioSection>
			<BioSection lineHeight='taller'>
				<BioYear>2018</BioYear>
				Started studying <Text as='b'>Computer Engineering</Text> at the{' '}
				<Text as='i'>University of Turkish Aeronautical Association</Text>
			</BioSection>
			<BioSection lineHeight='taller'>
				<BioYear>1999</BioYear>
				Born in <Text as='i'>EMEA</Text>
			</BioSection>
		</Section>
	);
};
