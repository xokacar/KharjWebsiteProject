import {Box,AspectRatio, Flex, Img} from '@chakra-ui/react'

export const AvatarImage = () => {
    return (
        
                <Box>
                    <Img
                    borderRadius='full'
                    boxSize='200px'
                    src='https://user-images.githubusercontent.com/44809357/184952777-451f8e3d-f73b-4474-97be-d604b5accf67.jpg'
                    alt='Kharj Memoji Photo'
                    minW='200px'
                    />     
                </Box>
            
        
    )
}