import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box,
    useColorModeValue,
    Flex,
    IconButton,
  } from '@chakra-ui/react'
import {MoonIcon} from '@chakra-ui/icons'
import * as React from "react"

export const NavigationBar = () => {


    return (
        <Box 
        bg={useColorModeValue('gray.100', 'gray.900')} 
        px={4}>
        <Flex 
        h={16}
        alignItems="center"
        justifyContent="space-between">
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>  
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">About</BreadcrumbLink>
                    </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Works</BreadcrumbLink>
                            </BreadcrumbItem>
            
            </Breadcrumb >
            <IconButton
            aria-label='toggle theme'
            >
            <MoonIcon/>
            </IconButton>
            </Flex>
            </Box>
    );
};


