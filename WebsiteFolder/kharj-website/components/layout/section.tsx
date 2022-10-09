import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { ReactNode } from 'react';

const StyledDiv = chakra(motion.div, {
	shouldForwardProp: (prop) => {
		return shouldForwardProp(prop) || prop === 'transition';
	},
});

interface Props {
	children?: ReactNode;
	delay?: number;
}

export const Section = ({ children, delay = 0 }: Props) => {
	return (
		<StyledDiv
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			mb={6}
		>
			{children}
		</StyledDiv>
	);
};
