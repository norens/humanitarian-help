import * as React from 'react';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	partners: 'Partners',
});

i18n.set('fr', {
	partners: 'Les partenaires',
});

i18n.set('de', {
	partners: 'Partner',
});

i18n.set('lt', {
	partners: 'Partneriai',
});

i18n.set('it', {
	partners: 'Partner',
});

i18n.set('uk', {
	partners: 'Партнери',
});

const Partners = ({partners}) => {
	const t = useI18n();

	return (
		<div className="py-20">
			<a id="partners" className="scroll-mt-32">
				<SectionTitle>{t('partners')}</SectionTitle>
			</a>

			<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14">
				{partners.map(partner => (
					<div
						key={partner.id}
						className="flex items-center max-h-[60px] sm:max-h-[100px]"
					>
						<img
							src={partner.logo}
							className="w-full max-h-full object-contain"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Partners;
