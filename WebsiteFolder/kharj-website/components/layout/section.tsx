import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { AnimationOptions, motion, AnimatePresence, MotionAdvancedProps } from 'framer-motion';
import React from 'react';
import { ReactNode, Fragment } from 'react';


const StyledDiv = chakra(motion.div, {
	shouldForwardProp: (prop) => {
		return shouldForwardProp(prop) || prop === 'transition';
	},
});


interface Props {
	children?: ReactNode;
	delay: AnimationOptions<any> | any;

}

export const Section = ({ children, delay = 0 }: Props) => {
	return (
		<motion.div
			initial={{ y: 10, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, delay }}
		>
			{children}
		</motion.div>
	);
};
