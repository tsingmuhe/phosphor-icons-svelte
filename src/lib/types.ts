import type {Component} from 'svelte';
import type {SVGAttributes} from 'svelte/elements';

export type IconWeight =
    | 'thin'
    | 'light'
    | 'regular'
    | 'bold'
    | 'fill'
    | 'duotone';

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, 'color'> {
    weight?: IconWeight;
    color?: string;
    size?: string | number;
}

export type Icon = Component<IconProps>;
