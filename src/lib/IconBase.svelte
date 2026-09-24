<script lang="ts">
    import type {Snippet} from 'svelte';
    import {getIconContext} from './context';
    import type {IconProps, IconWeight} from './types';

    interface Props extends IconProps {
        weights: Partial<Record<IconWeight, Snippet>>;
        children?: Snippet;
    }

    let {
        alt,
        color,
        size,
        weight,
        mirrored,
        children,
        weights,
        ...restProps
    }: Props = $props();

    const context = getIconContext();
    const weightSnippet = $derived.by(() => {
        return weights[weight ?? context.weight ?? 'regular'];
    });
</script>

<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size ?? context.size ?? '1em'}
        height={size ?? context.size ?? '1em'}
        fill={color ?? context.color ?? 'currentColor'}
        transform={(mirrored ?? context.mirrored) ? 'scale(-1, 1)' : undefined}
        {...restProps}
>
    {#if alt}<title>{alt}</title>{/if}
    {@render children?.()}
    {@render weightSnippet?.()}
</svg>
