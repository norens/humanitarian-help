import * as React from 'react';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	whatWeDo: {
		title: 'What we do',
		collect:
			'We collect and integrate humanitarian goods for people needs in warehouses in the EU and the USA.',
		organize:
			'We organize humanitarian aid logistics from Europe and distribute within Ukrainian cities.',
		deliver: 'We deliver goods to Ukrainian towns.',
		provide: 'We provide warehouse system management.',
	},
});

i18n.set('fr', {
	whatWeDo: {
		title: 'Ce que nous faisons',
		collect:
			"Nous collectons dans des entrepôts situés dans l'UE et aux États-Unis des produits à caractère de l'aide humanitaire destinés à répondre aux besoins des personnes en difficulté. ",
		organize:
			"Nous assurons la logistique de l'aide humanitaire depuis l'Europe et la distribuons dans les villes ukrainiennes.",
		deliver: 'Nous livrons des produits dans les villes ukrainiennes.',
		provide: 'Nous assurons la gestion des systèmes de stockage.',
	},
});

i18n.set('de', {
	whatWeDo: {
		title: 'Was wir machen',
		collect:
			'Wir sammeln und sortieren humanitäre Güter für menschliche Bedürfnisse in Lagerräumen in der EU und den USA.',
		organize:
			'Wir organisieren die Logistik der humanitären Hilfe aus Europa und verteilen die in die ukrainischen Städte.',
		deliver: 'Wir liefern Güter in ukrainische Gemeinden.',
		provide: 'Wir stellen ein Lagerraumsystemmanagement zur Verfügung.',
	},
});

i18n.set('lt', {
	whatWeDo: {
		title: 'Ką mes darom',
		collect:
			'Surenkame ir integruojame humanitarines prekes žmonių poreikiams sandėliuose (ES ir JAV).',
		organize:
			'Organizuojame humanitarinės pagalbos logistiką iš Europos ir platiname Ukrainos miestuose.',
		deliver: 'Prekes pristatome į Ukrainos miestus.',
		provide: 'Suteikiame sandėlių valdymo paslaugas.',
	},
});

i18n.set('it', {
	whatWeDo: {
		title: 'Cosa facciamo',
		collect:
			"Raccogliamo e integriamo beni umanitari per i bisogni delle persone nei magazzini dell'UE e degli Stati Uniti.",
		organize:
			"Organizziamo la logistica degli aiuti umanitari dall'Europa e li distribuiamo all'interno delle città ucraine",
		deliver: 'Consegniamo merci nelle città ucraine.',
		provide: 'Forniamo la gestione del sistema di magazzino.',
	},
});

i18n.set('uk', {
	whatWeDo: {
		title: 'Що ми робимо',
		collect:
			'Ми збираємо та зберігаємо гуманітарну допомогу для нуждених на складах в Європі та в США.',
		organize:
			'Ми організовуємо логістику гуманітарної допомоги з Європи до міст та селищ в Україні.',
		deliver: 'Ми доправляємо гуманітрану допомогу в міста України.',
		provide: 'Ми організовуємо складський менеджмент.',
	},
});

const WhatWeDo = () => {
	const t = useI18n();

	return (
		<div>
			<a id="what-we-do" className="scroll-mt-32">
				<SectionTitle className="text-white">
					{t('whatWeDo.title')}
				</SectionTitle>
			</a>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-12">
				<div>
					<span className="text-yellow-400 text-5xl font-semibold">1</span>
					<p className="mt-2 text-white">{t('whatWeDo.collect')}</p>
				</div>

				<div>
					<span className="text-yellow-400 text-5xl font-semibold">2</span>
					<p className="mt-2 text-white">{t('whatWeDo.organize')}</p>
				</div>

				<div>
					<span className="text-yellow-400 text-5xl font-semibold">3</span>
					<p className="mt-2 text-white">{t('whatWeDo.deliver')}</p>
				</div>

				<div>
					<span className="text-yellow-400 text-5xl font-semibold">4</span>
					<p className="mt-2 text-white">{t('whatWeDo.provide')}</p>
				</div>
			</div>
		</div>
	);
};

export default WhatWeDo;
