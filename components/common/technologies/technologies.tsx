// React
import React from 'react';

// Chakra UI
import { Heading, Stack, Box, useColorModeValue } from '@chakra-ui/react';

// Framer Motion
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import { Section } from '../layout/section';

// Data
import { technologiesList } from './technologies-list';

export const Technologies = () => {

	const controls = useAnimation();
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const [ref, inView] = useInView();

	if (inView) {
		void controls.start('visible');
	}

	const slideInVariants = {
		hidden: { x: -100, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	};

	const boxBgColor = useColorModeValue('gray.800', 'gray.700');
	const boxTextColor = useColorModeValue('white', 'white');

	return (
		<Section delay={0.4}>
			<Heading as='h2' size='md' letterSpacing='wider' lineHeight='taller'>
				Technologies and Tools
			</Heading>
			<Stack ref={ref} spacing={4} mt={4} flexWrap='wrap'>
				{technologiesList.map((techGroup, groupIndex) => (
					<div key={groupIndex}>
						<Heading
							as='h3'
							size='sm'
							mt={3}
							mb={2}
							color='white'
							marginBlockEnd={4}
						>
							{techGroup.subtitle}
						</Heading>
						<Stack direction='row' justifyContent='flex-start' flexWrap='wrap'>
							{techGroup.items.map((tech, index) => (
								<motion.div
									key={index}
									initial='hidden'
									animate={controls}
									variants={slideInVariants}
									transition={{ duration: 0.5, delay: 0.1 * index }}
									whileHover={{
										scale: 1.1,
										rotate: 5,
										transition: { duration: 0.2 },
									}}
								>
									<Box
										p={3}
										bg={boxBgColor}
										color={boxTextColor}
										borderRadius='md'
										boxShadow='lg'
										fontWeight='bold'
										textAlign='center'
									>
										{tech}
									</Box>
								</motion.div>
							))}
						</Stack>
					</div>
				))}
			</Stack>
		</Section>
	);
};
