import type { ElementType, PictureBorders } from './enums';

interface Element {
	element: ElementType;
}

export interface BlockProps extends Element {
	link: string;
	text: string;
	icon?: string;
}

export interface PictureProps extends Element {
	path: string;
	style?: PictureBorders;
	link?: string;
}

export type ElementProps = BlockProps | PictureProps;

export interface AppProps {
	title: string;
	description?: string;
	profilePicture: PictureProps;
	elementProps: ElementProps[];
}
