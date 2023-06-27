import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import {BLOCKS} from '@contentful/rich-text-types';

const renderPostBody = (body, response) => {
	return documentToHtmlString(body, {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: node => {
				const asset = response.includes.Asset.find(asset => {
					return asset.sys.id === node.data.target.sys.id;
				});

				if (!asset) {
					return '';
				}

				return `<img src="${asset.fields.file.url}" width="${asset.fields.file.details.image.width}" height="${asset.fields.file.details.image.height}" alt="${asset.fields.title}"/>`;
			},
		},
	});
};

export default renderPostBody;
