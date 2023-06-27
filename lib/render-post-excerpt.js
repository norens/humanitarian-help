import {documentToPlainTextString} from '@contentful/rich-text-plain-text-renderer';

const renderPostExcerpt = (document, {limit} = {limit: 300}) => {
	const text = documentToPlainTextString(document);
	const excerpt = text.slice(0, limit);
	return excerpt.length === text.length ? excerpt : `${excerpt}...`;
};

export default renderPostExcerpt;
