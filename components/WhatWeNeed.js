import * as React from 'react';
import {useRouter} from 'next/router';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('uk', {
	whatWeNeed: {
		title: 'Потреби',
		clothing: {
			title: 'Одяг',
			items: ['Термо одяг', 'Спальники', 'Карімати', 'Ковдри'],
		},
		food: {
			title: 'Їжа',
			items: [
				'Продукти харчування',
				'Cуміші',
				'Набори швидкого приготування',
				'Напої',
			],
		},
		medicine: {
			title: 'Медицина',
			items: [
				'Перев’язочний матеріал',
				'Знеболюючі засоби',
				'Хірургічні матеріали',
			],
		},
		hygiene: {
			title: 'Засоби гігєни',
			items: [
				'Миючі засоби',
				'Побутова хімія',
				'Паперово-гігієнічна продукція',
			],
		},
	},
});

i18n.set('en', {
	whatWeNeed: {
		title: 'Our needs',
		clothing: {
			title: 'Clothing',
			items: ['Thermal clothing', 'Rescuers', 'Yoga mats', 'Blankets'],
		},
		food: {
			title: 'Food',
			items: [
				'Canned food',
				'Instant soups, potatoes, noodles',
				"Children's mixtures",
				'Drinks',
			],
		},
		medicine: {
			title: 'Medicine',
			items: [
				'Dressing material',
				'Sedatives',
				'Analgesics',
				'Surgical instruments, antiseptic drugs',
			],
		},
		hygiene: {
			title: 'Hygiene',
			items: [
				'Cleaning agents',
				'Household chemicals',
				'Hygienic paper products',
			],
		},
	},
});

i18n.set('de', {
	whatWeNeed: {
		title: 'Unsere Bedürfnisse',
		clothing: {
			title: 'Kleider',
			items: ['Thermische Kleidung', 'Retter', 'Yoga-Matten', 'Decken'],
		},
		food: {
			title: 'Lebensmittel',
			items: [
				'Dosen Essen',
				'Instant-Suppen, Kartoffeln, Nudeln',
				'Kindermischung',
				'Getränke',
			],
		},
		medicine: {
			title: 'Medizin',
			items: [
				'Verbandsmaterial',
				'Beruhigungsmittel',
				'Analgetika',
				'Chirurgische Instrumente, Antiseptika',
			],
		},
		hygiene: {
			title: 'Hygieneprodukte',
			items: [
				'Reinigungskraft',
				'Haushaltschemikalien',
				'Produkte aus Hygienepapier',
			],
		},
	},
});

i18n.set('fr', {
	whatWeNeed: {
		title: 'Nos besoins',
		clothing: {
			title: 'Vêtements',
			items: [
				'Vêtements thermiques',
				'Sauveteurs',
				'Tapis de yoga',
				'Couvertures',
			],
		},
		food: {
			title: 'Aliments',
			items: [
				'Nourriture en boîte',
				'Soupes instantanées, pommes de terre, nouilles',
				'Mélange pour enfants',
				'Boissons',
			],
		},
		medicine: {
			title: 'Médicament',
			items: [
				'Matériel de pansement',
				'Sédatifs',
				'Analgésiques',
				'Instruments chirurgicaux, médicaments antiseptiques',
			],
		},
		hygiene: {
			title: "Produits d'hygiène",
			items: [
				'Produits de nettoyage',
				'Produits chimiques ménagers',
				'Produits en papier hygiénique',
			],
		},
	},
});

i18n.set('lt', {
	whatWeNeed: {
		title: 'Mūsų poreikiai',
		clothing: {
			title: 'Drabužiai',
			items: ['Termo drabužiai', 'Gelbėtojai', 'Jogos kilimėliai', 'Antklodės'],
		},
		food: {
			title: 'Maistas',
			items: [
				'Konservai',
				'Greitai paruošiamos sriubos, bulvės, makaronai',
				'Vaikiškas mišinys',
				'Gėrimai',
			],
		},
		medicine: {
			title: 'Vaistas',
			items: [
				'Persirengimo medžiaga',
				'Raminamieji vaistai',
				'Analgetikai',
				'Chirurginiai instrumentai, antiseptiniai vaistai',
			],
		},
		hygiene: {
			title: 'Higienos prekės',
			items: [
				'Valymo priemonės',
				'Buitinė chemija',
				'Higieniniai popieriaus gaminiai',
			],
		},
	},
});

i18n.set('it', {
	whatWeNeed: {
		title: 'I nostri bisogni',
		clothing: {
			title: 'Vestiti',
			items: [
				'Abbigliamento termico',
				'Soccorritori',
				'Materassini da yoga',
				'Coperte',
			],
		},
		food: {
			title: 'Cibo',
			items: [
				'Cibo in scatola',
				'Zuppe istantanee, patate, noodles',
				'Miscuglio per bambini',
				'Bevande',
			],
		},
		medicine: {
			title: 'Medicinale',
			items: [
				'Materiale per medicazione',
				'Sedativi',
				'Analgesici',
				'Strumenti chirurgici, farmaci antisettici',
			],
		},
		hygiene: {
			title: "Prodotti per l'igiene",
			items: [
				'Detergenti',
				'Prodotti chimici domestici',
				'Prodotti di carta igienica',
			],
		},
	},
});

const WhatWeNeed = () => {
	const router = useRouter();
	const {whatWeNeed} = i18n.table(router.locale);
	const t = useI18n();

	return (
		<div className="py-20">
			<a id="what-we-need" className="scroll-mt-20">
				<SectionTitle>{t('whatWeNeed.title')}</SectionTitle>
			</a>

			<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
				{['clothing', 'food', 'medicine', 'hygiene'].map((category, index) => (
					<div key={index}>
						{category === 'clothing' && (
							<svg
								viewBox="0 0 64 64"
								xmlSpace="preserve"
								xmlns="http://www.w3.org/2000/svg"
								className="w-16 h-16"
							>
								<path d="m57.5 48.5-24.4-13H33v-1.8c1.8-.8 3-2.5 3-4.6 0-2.8-2.2-5-5-5s-5 2.2-5 5h2c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3v3.4h-.1l-24.4 13C4.3 49.7 3 51.9 3 54.4 3 58 6 61 9.6 61h44.7c3.7 0 6.6-3 6.6-6.6.1-2.5-1.2-4.7-3.4-5.9zM54.4 59H9.6C7.1 59 5 56.9 5 54.4c0-1.7.9-3.3 2.4-4.1l24.4-13.1h.4l24.4 13.1c1.5.8 2.4 2.4 2.4 4.1 0 2.5-2.1 4.6-4.6 4.6z" />
							</svg>
						)}

						{category === 'food' && (
							<svg
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								className="w-16 h-16"
							>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M32 32V14H10v48h18M32 14l-6-6H6l4 6M6 8l-4 6v48h8M26 8V2H6v6"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M28 50H14V26h14v3M32 22H10M28 54H10M28 32h18v30H28zM28 58h18M28 38h18M40 32V22h4v10M46 62h14a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-6a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2H46"
								/>
							</svg>
						)}

						{category === 'medicine' && (
							<svg
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								className="w-16 h-16"
							>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M2 58h60v4H2zM4 54h56v4H4zM6 54V34M58 54V34M18 34v20M46 34v20M24 54V38h16v16M32 38v16M10 38h4v8h-4zM50 38h4v8h-4zM6 30V10M58 30V10M2 30h60v4H2zM23 10H2V6h21M41 6h21v4H41M23 2h18v12H23zM32 5v6M29 8h6M10 18h8v8h-8zM22 18h8v8h-8zM34 18h8v8h-8zM46 18h8v8h-8z"
								/>
							</svg>
						)}

						{category === 'hygiene' && (
							<svg
								viewBox="0 0 64 64"
								xmlns="http://www.w3.org/2000/svg"
								className="w-16 h-16"
							>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M2 15v47h20V15l-5-5H7l-5 5zM17 10V6H7v4M9 6V2h6v4"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M2 21h20v34H2z"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 27h12v22H6z"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M18 31h-6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2 2 2 0 0 0 2 2h6M26 38h24v20a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4V38ZM42 38v-8l2-4V12h2a2 2 0 0 1 2 2v13l-2 4v7"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M44 12h-4v10h4M40 15h4M40 18h4M30 38v-8l2-4V12h2a2 2 0 0 1 2 2v13l-2 4v7"
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M32 12h-4v10h4M28 15h4M28 18h4M26 42h24"
								/>
								<circle
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									cx={58}
									cy={12}
									r={4}
								/>
								<circle
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									cx={55}
									cy={25}
									r={3}
								/>
								<circle
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									cx={47}
									cy={5}
									r={3}
								/>
								<path
									fill="none"
									stroke="#000"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M38 42v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0 2-2V42"
								/>
							</svg>
						)}

						<h3 className="mt-2 text-lg font-semibold">
							{whatWeNeed[category].title}
						</h3>

						<ul className="list-disc mt-2 ml-4">
							{whatWeNeed[category].items.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhatWeNeed;
