import { Link, Heading, List, ListItem, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Section } from '../layout/section';
export const Contact = () => {
	return (
		<Section delay={0.4}>
			<React.Fragment>
				<Heading as='h2' size='md' letterSpacing='wider' lineHeight='taller'>
					Contact with me
				</Heading>
				<List>
					<ListItem>
						<Link href='https://www.github.com/okaykacar' target='_blank'>
							<Button variant='ghost'>
								<Text lineHeight='taller'>Github</Text>
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href='https://www.linkedin.com/in/okaykacar' target='_blank'>
							<Button variant='ghost'>
								<Text lineHeight='taller'>Linkedin</Text>
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href='https://www.twitter.com/okaykacarr' target='_blank'>
							<Button variant='ghost'>
								<Text lineHeight='taller'>Twitter</Text>
							</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href='mailto:okay.kacar@outlook.com' target=''>
							<Button variant='ghost'>
								<Text lineHeight='taller'>E-mail</Text>
							</Button>
						</Link>
					</ListItem>
				</List>
			</React.Fragment>
		</Section>
	);
};
