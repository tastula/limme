import { ElementType, IconStyle, PictureBorders } from './enums';
import type { AppProps } from './interfaces';

const appProps: AppProps = {
	title: 'Valtteri Tastula',
	description: 'Studying computer science and business. Working in health tech.',
	profilePicture: {
		element: ElementType.Picture,
		path: 'https://avatars.githubusercontent.com/u/30056149',
		style: PictureBorders.squareSoft,
	},
	elementProps: [
		{
			element: ElementType.IconRow,
			icons: [
				{
					element: ElementType.Icon,
					link: 'https://github.com/tastula',
					icon: IconStyle.GitHub,
				},
				{
					element: ElementType.Icon,
					link: 'https://instagram.com/tastulad',
					icon: IconStyle.Instagram,
				},
				{
					element: ElementType.Icon,
					link: 'https://t.me/tastula',
					icon: IconStyle.Telegram,
				},
				{
					element: ElementType.Icon,
					link: 'mailto:valtteri.tastula@tuni.fi',
					icon: IconStyle.Email,
				},
			],
		},
		{
			element: ElementType.Block,
			link: 'https://www.youtube.com/watch?v=kYWwULruwZc',
			text: 'Uplifting indie pop',
		},
		{
			element: ElementType.Block,
			link: 'https://www.youtube.com/channel/UCvlj0IzjSnNoduQF0l3VGng',
			text: 'Not so uplifting news',
		},
		{
			element: ElementType.Block,
			link: 'https://github.com/tastula/limme',
			text: 'Check out Limme',
		},
	],
};

export default appProps;
