import * as React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import useI18n from '../hooks/use-i18n';
import i18n from '../lib/i18n';

i18n.set('en', {
	post: {
		readMore: 'Read more',
	},
});

i18n.set('fr', {
	post: {
		readMore: 'Lire la suite',
	},
});

i18n.set('de', {
	post: {
		readMore: 'Weiterlesen',
	},
});

i18n.set('lt', {
	post: {
		readMore: 'Skaityti daugiau',
	},
});

i18n.set('it', {
	post: {
		readMore: 'Per saperne di più',
	},
});

i18n.set('uk', {
	post: {
		readMore: 'Детальніше',
	},
});

const Post = ({title, slug, date, body, excerpt}) => {
	const t = useI18n();
	const {locale} = useRouter();
	const formattedDate = React.useMemo(() => {
		const formatter = new Intl.DateTimeFormat(locale, {dateStyle: 'long'});
		return formatter.format(new Date(date));
	}, [locale, date]);

	return (
		<article>
			<Link href={`/blog/${slug}`}>
				<a>
					<h1 className="text-4xl font-bold hover:text-blue-600">{title}</h1>
				</a>
			</Link>

			<span className="text-gray-500">{formattedDate}</span>
			<div
				className="mt-4 prose max-w-3xl hover:prose-a:text-blue-600"
				dangerouslySetInnerHTML={{__html: body || excerpt}}
			/>

			{excerpt && (
				<div className="mt-2">
					<Link href={`/blog/${slug}`}>
						<a className="underline hover:text-blue-600">
							{t('post.readMore')} →
						</a>
					</Link>
				</div>
			)}
		</article>
	);
};

export default Post;
