import * as React from 'react';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	whoCanHelp: {
		title: 'Who can help',
		humanitarianAid:
			'Foreign or Ukrainian volunteer company which wants to help raising humanitarian aid.',
		resources:
			'Organization willing to provide finances, transportation, fuel, drivers or warehouses.',
		healthCare:
			'Healthcare company, which can provide medications and humanitarian aid.',
	},
});

i18n.set('fr', {
	whoCanHelp: {
		title: 'Qui peut aider',
		humanitarianAid:
			"Société bénévole étrangère ou ukrainienne qui veut contribuer à la mobilisation de l'aide humanitaire.",
		resources:
			'Organisme souhaitant fournir des fonds, des moyens de transport, du carburant, des chauffeurs ou des entrepôts.',
		healthCare:
			'Société de services de santé, qui peut fournir des médicaments et une aide humanitaire.',
	},
});

i18n.set('de', {
	whoCanHelp: {
		title: 'Wer kann helfen',
		humanitarianAid:
			'Ein ausländischer oder ukrainischer freiwilligen Verein, der helfen will, humanitäre Hilfe zu sammeln.',
		resources:
			'Organisationen, die Geld, Transport, Kraftstoff, Fahrer oder Lager bereitstellen wollen.',
		healthCare:
			'Gesundheitsunternehmen, die Medikamente und humanitäre Hilfe bereitstellen können.',
	},
});

i18n.set('lt', {
	whoCanHelp: {
		title: 'Visi norintys padėti',
		humanitarianAid:
			'Užsienio ar Ukrainos savanoriai kurie nori padėti pritraukti humanitarinę pagalbą.',
		resources:
			'Organizacijos norinčios aprūpinti finansavimu, transportu, degalais, vairuotojais ar sandėliavimo paslaugomis.',
		healthCare:
			'Sveikatos priežiūros įmonės galinčios teikti vaistus ir humanitarinę pagalbą.',
	},
});

i18n.set('it', {
	whoCanHelp: {
		title: 'Chi può aiutare',
		humanitarianAid:
			'Compagnia di volontariato straniera o ucraina che vuole aiutare a raccogliere aiuti umanitari.',
		resources:
			'Organizzazione disposta a fornire finanze, trasporti, carburante, autisti o magazzini.',
		healthCare: 'Azienda sanitaria, che può fornire farmaci e aiuti umanitari.',
	},
});

i18n.set('uk', {
	whoCanHelp: {
		title: 'Хто може допомогти',
		humanitarianAid:
			'Іноземна або українська організація, яка хоче допомогти зібрати гуманітарну допомогу.',
		resources:
			'Організація, що хоче допомогти фінансами, транспортом, паливом, водіями та складами.',
		healthCare:
			"Компанії в сфері охорони здоров'я, які можуть надати ліки та гуманітарну допомогу",
	},
});

const WhoCanHelp = () => {
	const t = useI18n();

	return (
		<div className="py-20">
			<a id="how-you-can-help" className="scroll-mt-20">
				<SectionTitle>{t('whoCanHelp.title')}</SectionTitle>
			</a>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
				<div>
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						className="w-16 h-16"
					>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M16 12v7"
						/>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M12.5 15.5h7M16 27S.25 14.54 4.84 8 16 8 16 8s6.51-6.7 11.16 0S16 27 16 27Z"
						/>
					</svg>

					<p className="mt-2">{t('whoCanHelp.humanitarianAid')}</p>
				</div>

				<div>
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						className="w-16 h-16"
					>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M10 26.5a2.5 2.5 0 0 1-5 0 2.73 2.73 0 0 1 0-.5 2.5 2.5 0 0 1 5 0 2.73 2.73 0 0 1 0 .5ZM25 26.5a2.5 2.5 0 0 1-5 0 2.73 2.73 0 0 1 .05-.5A2.5 2.5 0 0 1 25 26a2.73 2.73 0 0 1 0 .5Z"
						/>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M17 10v16h-7a2.5 2.5 0 0 0-4.9 0H3V10ZM29 15.33V26h-4a2.5 2.5 0 0 0-4.9 0H17V10h5ZM13 6h4v3h-4zM10.25 16v4.5M8 18.25h4.5M17 18h12"
						/>
					</svg>

					<p className="mt-2">{t('whoCanHelp.resources')}</p>
				</div>

				<div>
					<svg
						viewBox="0 0 32 32"
						xmlns="http://www.w3.org/2000/svg"
						className="w-16 h-16"
					>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M3 16h26v13H3z"
						/>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M14 23h4v6h-4zM7 20v2M11 20v2M7 23v2M11 23v2M21 20v2M25 20v2M21 23v2M25 23v2M16 6v5M13.5 8.5h5M25 9v7H7V9h4v4h10V9h4z"
						/>
						<path
							fill="none"
							stroke="#000"
							strokeLinejoin="bevel"
							strokeWidth={2}
							d="M11 4h10v9H11z"
						/>
					</svg>

					<p className="mt-2">{t('whoCanHelp.healthCare')}</p>
				</div>
			</div>
		</div>
	);
};

export default WhoCanHelp;
