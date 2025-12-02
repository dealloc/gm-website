import {getCollection} from 'astro:content';
import rss from '@astrojs/rss';
import {SITE_DESCRIPTION, SITE_TITLE} from '../consts';

export async function GET(context) {
	const campaigns = await getCollection('campaigns');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: campaigns.map((campaign) => ({
			title: campaign.data.title,
			description: campaign.data.description,
			pubDate: campaign.data.publishDate,
			link: `/campaigns/${campaign.id}/`,
		})),
	});
}
