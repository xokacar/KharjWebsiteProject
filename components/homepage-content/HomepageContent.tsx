/* eslint-disable react/no-unescaped-entities */
// React
import React from 'react';

// Components
import { Section } from '../common/layout/section';
import { Bio } from '../common/Bio/bio';
import { MyPassions } from '../common/mypassions/myPassions';
import { Contact } from '../common/contact/contact';
import { Technologies } from '../common/technologies/technologies';

export const HomepageContent = () => {
	return (
		<Section>
			<Bio />
			<Technologies />
			<MyPassions />
			<Contact />
		</Section>
	);
};
