import * as React from 'react';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	memorandums: {
		title: 'Memorandums',
		description:
			'We provide all the technical and logistic support on a legal basis.',
	},
});

i18n.set('fr', {
	memorandums: {
		title: 'Les accords',
		description:
			'Nous fournissons tout le soutien technique et logistique sur une base légale.',
	},
});

i18n.set('de', {
	memorandums: {
		title: 'Memoranden',
		description:
			'Wir bieten die gesamte technische und logistische Unterstützung auf gesetzlicher Grundlage.',
	},
});

i18n.set('lt', {
	memorandums: {
		title: 'Memorandumai',
		description:
			'Teisiniu pagrindu teikiame visą techninę ir logistinę pagalbą.',
	},
});

i18n.set('it', {
	memorandums: {
		title: 'Memorandum',
		description:
			'Forniamo tutto il supporto tecnico e logistico su base legale.',
	},
});

i18n.set('uk', {
	memorandums: {
		title: 'Меморандуми',
		description:
			'Ми надаємо всю технічну та логістичну підтримку на законній основі.',
	},
});

const Memorandums = () => {
	const t = useI18n();

	return (
		<div className="py-20">
			<a id="memorandums" className="scroll-mt-32">
				<SectionTitle>{t('memorandums.title')}</SectionTitle>
			</a>

			<p className="mt-8">{t('memorandums.description')}</p>

			<ul className="mt-2 list-disc ml-4 space-y-4">
				<li>
					Kyiv City State Administration
					<ul className="list-disc ml-4 marker">
						<li>
							<a
								href="https://drive.google.com/file/d/1SW1RbLUmoeS49fBjKhWjAHjiC8ozhiZk/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								Українська
							</a>
						</li>
					</ul>
				</li>
				<li>
					Ministry of Internal Affairs
					<ul className="list-disc ml-4">
						<li>
							<a
								href="https://drive.google.com/file/d/1VHcIWCBWf3gC_DnkmQK_jwbmPWZLvvqP/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								Українська
							</a>
						</li>
					</ul>
				</li>
				<li>
					Lviv City State Administration
					<ul className="list-disc ml-4">
						<li>
							<a
								href="https://drive.google.com/file/d/1EEGu8Bfegwas50cZQWdrOLiO6LD_CUCv/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								Українська
							</a>
						</li>
					</ul>
				</li>
				<li>
					Ministry of Reintegration
					<ul className="list-disc ml-4">
						<li>
							<a
								href="https://drive.google.com/file/d/1OW-El1hNyndCQA1SFjLue3XDxrst-9LQ/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								Українська
							</a>
						</li>
						<li>
							<a
								href="https://drive.google.com/file/d/1nx9XTVHjFMRa72Al-h4EKkakDYcMSKnq/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								English
							</a>
						</li>
					</ul>
				</li>
				<li>
					Rivne City State Administration
					<ul className="list-disc ml-4">
						<li>
							<a
								href="https://drive.google.com/file/d/18wFgMpIiRrABBXixSZORlTBeM5GomOqM/view?usp=sharing"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								Українська
							</a>
						</li>
					</ul>
				</li>
				<li>
					Coordination of Misericordie Area Fiorentina
					<ul className="list-disc ml-4">
						<li>
							<a
								href="https://docs.google.com/document/d/1BtqwhSANlgNpstGXrMdYQMG2bwHdprKA/edit?usp=sharing&ouid=114023635741969116976&rtpof=true&sd=true"
								target="_blank"
								rel="nofollow noreferrer"
								className="text-blue-500 hover:underline"
							>
								English
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Memorandums;
