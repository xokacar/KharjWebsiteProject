import {
    Heading,
    Text,
} from '@chakra-ui/react';
import { BioSection, BioYear } from './styles';
import React from 'react';
import { Section } from '../layout/section';


export const Bio = () => {
    return (
        <Section>
        <React.Fragment>
        <Heading as='h2' size='lg' lineHeight='1.8em' letterSpacing='wider'>
            Bio
            </Heading>
        <BioSection lineHeight='taller'>
            <BioYear>2022</BioYear>
            Working as a Frontend Developer at Pavza and Senior Student.
        </BioSection>
        <BioSection lineHeight='taller'>
            <BioYear>2018</BioYear>
            Started to study <Text as='b'>Computer Engineering</Text> at the <Text as='i'>University of Turkish Aeronautical Association</Text> 
        </BioSection>
        <BioSection lineHeight='taller'>
            <BioYear>1999</BioYear>
            Born in <Text as='i'>EMEA</Text>
            </BioSection>
        </React.Fragment>
        </Section>
    );
};


