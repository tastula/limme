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
	profile?: boolean;
	link?: string;
}

export type ElementProps = BlockProps | PictureProps;

export interface AppProps {
	title: string;
	description?: string;
	elementProps: ElementProps[];
	pictureProps: PictureProps;
}
