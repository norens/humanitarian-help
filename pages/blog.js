import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import got from 'got';
import mem from 'mem';
import Navigation from '../components/Navigation';
import Post from '../components/Post';
import Contacts from '../components/Contacts';
import useI18n from '../hooks/use-i18n';
import renderPostExcerpt from '../lib/render-post-excerpt';

const BlogPage = ({posts}) => {
	const t = useI18n();

	return (
		<>
			<Head>
				<title>Blog – Charitable foundation «I am not alone»</title>
			</Head>

			<Navigation />

			<div className="container-sm py-20 space-y-12">
				{posts.map(post => (
					<Post
						key={post.id}
						title={post.title}
						slug={post.slug}
						date={post.date}
						excerpt={post.excerpt}
					/>
				))}
			</div>

			<Contacts />
		</>
	);
};

export default BlogPage;

const fetchPosts = mem(
	async () => {
		const response = await got(
			`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries`,
			{
				searchParams: {
					content_type: 'blogPost',
					order: '-sys.createdAt',
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
			excerpt: renderPostExcerpt(item.fields.body),
		}));
	},
	{maxAge: 1000 * 60},
);

export const getServerSideProps = async () => {
	const posts = await fetchPosts();

	return {
		props: {posts},
	};
};
