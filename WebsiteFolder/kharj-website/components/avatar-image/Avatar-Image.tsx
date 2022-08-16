import {Box, AspectRatio, Flex, Image} from '@chakra-ui/react'

export const AvatarImage = () => {
    return (
        <Flex position='relative' justify='center' pb={4}>
            <AspectRatio as='figure'>
                <Box>
                    <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='../public/images/okay-memoji.jpg'/>
                </Box>
            </AspectRatio>
        </Flex>
    )
}