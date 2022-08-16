import { Container, Box, Heading, Text } from '@chakra-ui/react'
import { AvatarImage } from '../avatar-image/Avatar-Image'

export const HomepageTitle = () => {
    return (
        <Container >
            <Box>
                <Heading as="h1" size="lg" mb={4}>
                    Kharj 
                </Heading>
    
                <Text as="h2" lineHeight='160%'>
                    Hey I'm Kharj and I'm a software engineer.
                     I'm currently working at a startup called  
                       as a frontend engineer. I'm also a student at the University of Turkish Aeronautical Association studying Computer Engineer.
                </Text>
            </Box>
            <AvatarImage/>
        </Container>

    )
}