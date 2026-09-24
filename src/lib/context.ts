import {getContext, setContext} from 'svelte';
import type {IconWeight} from './types';

const IconContextKey = Symbol('phosphor-icons-svelte-context');

export interface IconContext {
    color?: string;
    size?: string | number;
    weight?: IconWeight;
    mirrored?: boolean;
}

export type IconContextGetter = () => IconContext;

export const setIconContext = (context: IconContextGetter) =>
    setContext(IconContextKey, context);

export const getIconContext = (): IconContext => {
    const context = getContext<IconContextGetter | undefined>(IconContextKey);
    return context?.() ?? {};
};
