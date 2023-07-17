import * as React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import got from 'got';
import mem from 'mem';
import Navigation from '../../components/Navigation';
import Post from '../../components/Post';
import Contacts from '../../components/Contacts';
import useI18n from '../../hooks/use-i18n';
import renderPostBody from '../../lib/render-post-body';

const PostPage = ({post}) => {
	const t = useI18n();

	return (
		<>
			<Head>
				<title>Blog – Charitable foundation «I am not alone»</title>
			</Head>

			<Navigation />

			<div className="container-sm py-20">
				{post ? (
					<Post
						title={post.title}
						slug={post.slug}
						date={post.date}
						body={post.body}
					/>
				) : (
					<h1 className="text-3xl font-bold text-center">404</h1>
				)}
			</div>

			{post && <Contacts />}
		</>
	);
};

export default PostPage;

const fetchPosts = mem(
	async () => {
		const response = await got(
			`https://cdn.contentful.com/spaces/5w8azu253w2e/environments/master/entries`,
			{
				searchParams: {
					content_type: 'blogPost',
					order: '-sys.createdAt',
				},
				headers: {
					authorization: `Bearer If_HFFggWqHIKc16C5SHIGtLsItzFQrUa-RI02ynMTk`,
				},
				responseType: 'json',
			},
		);

		return response.body.items.map(item => ({
			id: item.sys.id,
			title: item.fields.title,
			slug: item.fields.slug,
			date: item.sys.createdAt,
			body: renderPostBody(item.fields.body, response.body),
		}));
	},
	{maxAge: 1000 * 60},
);

export const getServerSideProps = async ({params}) => {
	const posts = await fetchPosts();
	const post = posts.find(post => post.slug === params.slug) || null;

	return {
		props: {post},
	};
};
