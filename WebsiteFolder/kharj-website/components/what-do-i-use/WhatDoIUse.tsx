import React from 'react'
import  Image  from 'next/image';
import { Heading } from '@chakra-ui/react';

export const WhatDoIUse = () => {
    
    return (
        
        <React.Fragment>
        <Heading as='h5' size='lg'> What do I use ?</Heading>
        <Image src='/logo-typescript.svg' height={30} width={30} />
        <Image src='/logo-css.svg' height={30} width={30} />
        <Image src='/logo-figma.svg' height={30} width={30} />
        <Image src='/logo-javascript.svg' height={30} width={30} />
        <Image src='/logo-nextjs.svg' height={30} width={30} />
        <Image src='/logo-react.svg' height={30} width={30} />
        </React.Fragment>
    );
};

