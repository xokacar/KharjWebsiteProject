import { Link,Heading,List,ListItem,Text,Button } from "@chakra-ui/react";
import React from "react";
import { Section } from '../layout/section';
export const Contact = () => {
    return (
        <Section delay={0.4}>
        <React.Fragment>
        <Heading as='h1' size='lg' letterSpacing='wider'>  
        Contact with me
        </Heading>
        <List>
            <ListItem>
                <Link href='https://www.github.com/okaykacar' target='_blank'>
                <Button
                variant="ghost"
              >
                    <Text lineHeight='taller'>Github</Text>
                    </Button>
                    </Link>
            </ListItem>
            <ListItem>
                <Link href='https://www.linkedin.com/in/okaykacar' target='_blank'>
                <Button
                variant="ghost"
              >
                <Text lineHeight='taller'>Linkedin</Text>
                </Button>
                    </Link>
            </ListItem>
            <ListItem>
                <Link href='https://www.instagram.com/okaykacar_' target='_blank'>
                <Button
                variant="ghost"
              >
                <Text lineHeight='taller'>Instagram</Text>
                </Button>
                    </Link>
            </ListItem>
        </List>
        </React.Fragment>
        </Section>
    );
};