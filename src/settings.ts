import { ElementType, PictureBorders } from './enums';
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
			element: ElementType.Block,
			link: 'https://github.com/tastula',
			text: 'GitHub',
		},
		{
			element: ElementType.Block,
			link: 'https://t.me/tastula',
			text: 'Telegram',
		},
		{
			element: ElementType.Block,
      link: 'https://instagram.com/tastulad',
			text: 'Instagram',
		},
		{
			element: ElementType.Block,
			link: 'https://www.youtube.com/watch?v=kYWwULruwZc',
			text: 'Uplifting indie pop',
		},
		{
			element: ElementType.Block,
			link: 'https://github.com/tastula/limme',
			text: 'Check out Limme',
		},
	],
};

export default appProps;
