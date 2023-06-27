import * as React from 'react';
import {useRouter} from 'next/router';
import Image from 'next/image';
import {Check} from 'react-feather';
import clsx from 'clsx';
import btoa from 'btoa-lite';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';
import map from '../public/map.png';
import logo from '../public/logo-2.png';

i18n.set('en', {
	header: {
		nameFirstLine: 'I am not alone',
		nameSecondLine: 'We are Ukraine',
		volunteerHub: 'Volunteer Hub',
		humanitarianAid: 'Humanitarian aid',
		logistics: 'Logistics and transport',
		itCollaboration: 'IT collaboration',
		warehouseManagement: 'Warehouse management',
		wantToHelp: 'I want to help',
		needHelp: 'I need help',
	},
});

i18n.set('fr', {
	header: {
		nameFirstLine: 'Je ne suis pas seul',
		nameSecondLine: "Nous sommes l'Ukraine",
		volunteerHub: 'Centre des bénévoles',
		humanitarianAid: 'Aide humanitaire',
		logistics: 'Logistique et transports',
		itCollaboration: 'Coopération informatique',
		warehouseManagement: "Gestion de l'entrepôt",
		wantToHelp: 'Je veux aider',
		needHelp: "J'ai besoin d'aide",
	},
});

i18n.set('de', {
	header: {
		nameFirstLine: 'Ich bin nicht alleine',
		nameSecondLine: 'Wir sind die Ukraine',
		volunteerHub: 'Freiwilligen-Hub',
		humanitarianAid: 'Humanitäre Hilfe',
		logistics: 'Logistik und Transport',
		itCollaboration: 'IT Zusammenarbeit',
		warehouseManagement: 'Lagerraum Management',
		wantToHelp: 'Ich will helfen',
		needHelp: 'Ich brauche Hilfe',
	},
});

i18n.set('lt', {
	header: {
		nameFirstLine: 'Aš ne viena(s)',
		nameSecondLine: 'Mes su Ukraina',
		volunteerHub: 'Savanorių centras',
		humanitarianAid: 'Humanitarinė pagalba',
		logistics: 'Logistika ir transportas',
		itCollaboration: 'IT bendradarbiavimas',
		warehouseManagement: 'Sandėlių valdymas',
		wantToHelp: 'Noriu padėti',
		needHelp: 'Man reikia pagalbos',
	},
});

i18n.set('it', {
	header: {
		nameFirstLine: 'Io non sono solo',
		nameSecondLine: "Siamo L'Ucraina",
		volunteerHub: 'Centro del volontariato',
		humanitarianAid: 'Aiuto umanitario',
		logistics: 'Logistica e trasporti',
		itCollaboration: 'Collaborazione informatica',
		warehouseManagement: 'Gestione del magazzino',
		wantToHelp: 'Voglio aiutare',
		needHelp: 'Ho bisogno di aiuto',
	},
});

i18n.set('uk', {
	header: {
		nameFirstLine: 'Я НЕ ОДИН',
		nameSecondLine: 'МИ - УКРАЇНА',
		volunteerHub: 'Волонтерський хаб',
		humanitarianAid: 'Гуманітарна допомога',
		logistics: 'Логістика та транспорт',
		itCollaboration: 'Співробітництво в сфері IT',
		warehouseManagement: 'Менеджмент складу',
		wantToHelp: 'Я хочу допомогти',
		needHelp: 'Менi потрiбна допомога',
	},
});

const chatUrl = new URL(
	'https://app.activechat.ai/gateway/cw/0018331c-e182-4166-9490-c2ba7e6d267a',
);

const Header = () => {
	const t = useI18n();
	const router = useRouter();
	const language = router.locale === 'uk' ? 'UA' : router.locale.toUpperCase();

	const canHelpUrl = React.useMemo(() => {
		const ref = JSON.stringify({
			event: 'can_help',
			u_lang: language,
		});

		const url = new URL(chatUrl);
		url.searchParams.set('ref', `base64_${btoa(ref)}`);
		return url.href;
	}, [language]);

	const needHelpUrl = React.useMemo(() => {
		const ref = JSON.stringify({
			event: 'need_help',
			u_lang: language,
		});

		const url = new URL(chatUrl);
		url.searchParams.set('ref', `base64_${btoa(ref)}`);
		return url.href;
	}, [language]);

	return (
		<>
			<header className="pt-14 pb-20 relative">
				<div className="max-w-lg mx-auto">
					<Image src={logo} />
				</div>

				<h2 className="mt-8 text-center text-xl font-semibold">
					{t('header.volunteerHub')}
				</h2>

				<div className="mt-2 flex justify-center">
					<ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:divide-x-2 divide-gray-600 space-y-1 lg:space-y-0">
						<li className="flex items-center space-x-2 lg:px-4">
							<Check className="w-4 h-4 block lg:hidden" />
							<span>{t('header.humanitarianAid')}</span>
						</li>
						<li className="flex items-center space-x-2 lg:px-4">
							<Check className="w-4 h-4 block lg:hidden" />
							<span>{t('header.logistics')}</span>
						</li>
						<li className="flex items-center space-x-2 lg:px-4">
							<Check className="w-4 h-4 block lg:hidden" />
							<span>{t('header.itCollaboration')}</span>
						</li>
						<li className="flex items-center space-x-2 lg:px-4">
							<Check className="w-4 h-4 block lg:hidden" />
							<span>{t('header.warehouseManagement')}</span>
						</li>
					</ul>
				</div>

				<div
					className={clsx(
						'mt-12 flex',
						['uk', 'lt', 'it', 'de'].includes(router.locale)
							? 'flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 items-center justify-start sm:justify-center'
							: 'justify-center space-x-4',
					)}
				>
					<a
						href={canHelpUrl}
						target="_blank"
						rel="nofollow noreferrer"
						className="px-5 py-2 bg-black hover:bg-gray-700 text-white text-lg font-semibold rounded-full"
					>
						{t('header.wantToHelp')}
					</a>

					<a
						href={needHelpUrl}
						target="_blank"
						rel="nofollow noreferrer"
						className="px-5 py-2 bg-black hover:bg-gray-700 text-white text-lg font-semibold rounded-full"
					>
						{t('header.needHelp')}
					</a>
				</div>
			</header>
		</>
	);
};

export default Header;
