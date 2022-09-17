import React, { ReactElement } from 'react';
import { Flex,Box, SimpleGrid, Stack, Text, useColorModeValue,Icon, Heading } from '@chakra-ui/react';
import {  } from '@chakra-ui/react';
import LaptopWindowsRoundedIcon from '@mui/icons-material/LaptopWindowsRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import MusicNoteRoundedIcon from '@mui/icons-material/MusicNoteRounded';
 

// TODO : Take feature props from a dif file
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
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };


export const ILove = () => {
    
    return (
        <React.Fragment>
					<Heading as='h2' size='md' letterSpacing='wider' lineHeight=''>
            I Love
            </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={LaptopWindowsRoundedIcon} w={8} h={8} /> }
            title={'Frontend Development'}
            text={
              'Frontend development is my passion. I love to create beautiful and responsive websites by using React,Typescript and Next.js.'
            }
          />
          <Feature
            icon={<Icon as={DesignServicesRoundedIcon} w={8} h={8} />}
            title={'UI/UX Design'}
            text={
              'As I said I love to create beautiful websites. I also love to create beautiful designs for websites by using Figma and Adobe XD.'
            }
          />
          <Feature
            icon={<Icon as={MusicNoteRoundedIcon} w={8} h={8} />}
            title={'Music Production'}
            text={
              'I love to create beats and Deephouse by using FL Studio.'
            }
          />
        </SimpleGrid>
      </React.Fragment>
    );
  }
