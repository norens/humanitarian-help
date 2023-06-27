import * as React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import SectionTitle from './SectionTitle';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	updates: {
		title: 'Latest Updates',
		readAll: 'Read all updates',
	},
});

i18n.set('fr', {
	updates: {
		title: 'Dernières mises à jour',
		readAll: 'Lire toutes les mises à jour',
	},
});

i18n.set('de', {
	updates: {
		title: 'Letzte Aktualisierung',
		readAll: 'Lesen Sie alle Aktualisierungen',
	},
});

i18n.set('lt', {
	updates: {
		title: 'Naujausi Atnaujinimai',
		readAll: 'Skaityti visus atnaujinimus',
	},
});

i18n.set('it', {
	updates: {
		title: 'Ultimi aggiornamenti',
		readAll: 'Leggi tutti gli aggiornamenti',
	},
});

i18n.set('uk', {
	updates: {
		title: 'Останні оновлення',
		readAll: 'Прочитайте всі оновлення',
	},
});

const Updates = ({updates}) => {
	const t = useI18n();

	const {locale} = useRouter();
	const dateFormatter = React.useMemo(() => {
		return new Intl.DateTimeFormat(locale, {dateStyle: 'long'});
	}, [locale]);

	return (
		<div className="py-20">
			<a id="updates" className="scroll-mt-32">
				<SectionTitle>{t('updates.title')}</SectionTitle>
			</a>

			<div className="mt-8 grid md:grid-cols-3 gap-12">
				{updates.slice(0, 3).map(update => (
					<Link key={update.id} href={`/blog/${update.slug}`}>
						<a>
							<div className="rounded-md overflow-hidden bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">
								<div className="h-40">
									<img
										src={update.poster}
										className="w-full max-h-full object-cover"
									/>
								</div>

								<div className="p-3">
									<span className="block text-gray-900 font-medium">
										{update.title}
									</span>

									<span className="text-sm text-gray-500">
										{dateFormatter.format(new Date(update.date))}
									</span>

									<p className="mt-2 text-gray-700 text-sm">{update.excerpt}</p>
								</div>
							</div>
						</a>
					</Link>
				))}
			</div>

			{updates.length > 3 && (
				<div className="mt-10 text-center">
					<Link href="/blog">
						<a className="font-semibold bg-black text-white px-4 py-2 rounded-full">
							{t('updates.readAll')} →
						</a>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Updates;
