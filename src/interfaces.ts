import type { ElementType, IconStyle, PictureBorders } from './enums';

interface Element {
	element: ElementType;
}

export interface BlockProps extends Element {
	link: string;
	text: string;
	icon?: string;
}

export interface IconProps extends Element {
	link: string;
	icon: IconStyle | string;
}

export interface IconRowProps extends Element {
	icons: IconProps[];
}

export interface PictureProps extends Element {
	path: string;
	style?: PictureBorders;
	link?: string;
}

export type ElementProps = BlockProps | IconRowProps | PictureProps;

export interface AppProps {
	title: string;
	description?: string;
	profilePicture: PictureProps;
	elementProps: ElementProps[];
}
