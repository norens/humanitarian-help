import * as React from 'react';
import Head from 'next/head';
import got from 'got';
import mem from 'mem';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import WhoCanHelp from '../components/WhoCanHelp';
import WhatWeNeed from '../components/WhatWeNeed';
import WhatWeDo from '../components/WhatWeDo';
import Partners from '../components/Partners';
import Donate from '../components/Donate';
import Memorandums from '../components/Memorandums';
import Updates from '../components/Updates';
import Contacts from '../components/Contacts';
import LanguageSelect from '../components/LanguageSelect';
import useI18n from '../hooks/use-i18n';
import renderPostExcerpt from '../lib/render-post-excerpt';

const IndexPage = ({partners, updates}) => {
	const t = useI18n();

	return (
		<>
			<Head>
				<title>Charitable foundation «I am not alone»</title>
			</Head>

			<Navigation />

			<div className="container-sm">
				<Header />
				<WhoCanHelp />
				<WhatWeNeed />
			</div>

			<div className="bg-blue-500 mt-20 py-20">
				<div className="container-sm">
					<WhatWeDo />
				</div>
			</div>

			<div className="container-sm">
				<Partners partners={partners} />
				<Memorandums />
				<Donate />
				<Updates updates={updates} />
			</div>

			<Contacts />
		</>
	);
};

export default IndexPage;

const fetchPartners = mem(
	async () => {
		const response = await got(
			`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`,
			{
				searchParams: {
					content_type: 'partner',
					order: 'fields.order',
				},
				headers: {
					authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
				},
				responseType: 'json',
			},
		);

		return response.body.items.map(item => ({
			id: item.sys.id,
			logo: response.body.includes.Asset.find(asset => {
				return asset.sys.id === item.fields.logo.sys.id;
			}).fields.file.url,
		}));
	},
	{maxAge: 1000 * 60},
);

const findFirstImage = (document, response) => {
	for (const block of document.content) {
		if (block.nodeType === 'embedded-asset-block') {
			for (const asset of response.includes.Asset) {
				if (asset.sys.id === block.data.target.sys.id) {
					return asset.fields.file.url;
				}
			}
		}
	}
};

const getPoster = (post, response) => {
	if (post.fields.poster) {
		return response.includes.Asset.find(asset => {
			return asset.sys.id === post.fields.poster.sys.id;
		}).fields.file.url;
	}

	return findFirstImage(post.fields.body, response);
};

const fetchUpdates = mem(
	async () => {
		const response = await got(
			`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`,
			{
				searchParams: {
					content_type: 'blogPost',
					order: '-sys.createdAt',
					limit: 4,
				},
				headers: {
					authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
				},
				responseType: 'json',
			},
		);

		return response.body.items.map(item => ({
			id: item.sys.id,
			title: item.fields.title,
			slug: item.fields.slug,
			date: item.sys.createdAt,
			excerpt: renderPostExcerpt(item.fields.body, {limit: 100}),
			poster: getPoster(item, response.body),
		}));
	},
	{maxAge: 1000 * 60},
);

export const getServerSideProps = async () => {
	const [partners, updates] = await Promise.all([
		fetchPartners(),
		fetchUpdates(),
	]);

	return {
		props: {partners, updates},
	};
};
