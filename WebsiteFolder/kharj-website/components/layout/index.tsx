import { VStack,Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export const Layout = ({ children}: Props) => {
    return(
        <>
        <Container
        display="flex"
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh'}}
        px={{ base: 4, lg: 0}}
        centerContent>
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
        <VStack as='main' flex={1} w='full' spacing={16}>
        {children}
        </VStack>
        </VStack>
        </Container>
        </>
    );
};