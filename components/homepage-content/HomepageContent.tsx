/* eslint-disable react/no-unescaped-entities */
// React
import React from 'react';

// Chakra UI
import { Heading, Text, HStack, Stack } from '@chakra-ui/react';

//
import { AvatarImage } from '../common/avatar-image/Avatar-Image';
import { Section } from '../common/layout/section';
import { Bio } from '../common/Bio/bio';
import { MyPassions } from '../common/mypassions/myPassions';
import { Contact } from '../common/contact/contact';

export const HomepageContent = () => {
	return (
		<Section>
			<Bio />
			<MyPassions />
			<Contact />
		</Section>
	);
};
