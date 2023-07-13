import { Heading, Text,Link } from '@chakra-ui/react';
import { BioSection, BioYear } from './styles';
import React from 'react';
import { Section } from '../layout/section';

export const Bio = () => {
	return (
		<Section>
		<Heading as="h2" size="md" letterSpacing="wider" lineHeight="taller">
		  Bio
		</Heading>
		<BioSection lineHeight="taller">
		  <BioYear>2023-Q2 </BioYear>
		  Graduated from UTAA Currently working as a Software Engineer at  <Link href="https://nttdata-solutions.com" isExternal color="blue.500">
          NTT DATA
        </Link>, specializing in React Native and Expo.
		</BioSection>
		<BioSection lineHeight="taller">
		  <BioYear>2022-Q4 </BioYear>
		  Working as a Software Engineer at  <Link href="https://nttdata-solutions.com" isExternal color="blue.500">
          NTT DATA
        </Link> and Senior Student.
		</BioSection>
		<BioSection lineHeight="taller">
		  <BioYear>2022-Q2</BioYear>
		  Working as a Frontend Developer at Pavza and Senior Student.
		</BioSection>
		<BioSection lineHeight="taller">
		  <BioYear>2018</BioYear>
		  Started studying <Text as="b">Computer Engineering</Text> at the{' '}
		  <Text as="i">University of Turkish Aeronautical Association</Text>
		</BioSection>
		<BioSection lineHeight="taller">
		  <BioYear>1999</BioYear>
		  Born in <Text as="i">EMEA</Text>
		</BioSection>
	  </Section>
	);
};
