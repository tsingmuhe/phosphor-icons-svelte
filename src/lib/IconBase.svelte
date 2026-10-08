<script lang="ts">
    import type {Snippet} from 'svelte';
    import {getIconContext} from './context';
    import type {IconProps, IconWeight} from './types';

    interface Props extends IconProps {
        name?: string;
        weights: Partial<Record<IconWeight, Snippet>>;
    }

    let {
        name,
        weights,
        weight,
        color,
        size,
        ...restProps
    }: Props = $props();

    const context = getIconContext();

    const resolvedSize = $derived(size ?? context.size ?? '1em');
    const resolvedColor = $derived(color ?? context.color ?? 'currentColor');
    const weightSnippet = $derived.by(() => {
        return weights[weight ?? context.weight ?? 'regular'];
    });
</script>

<svg
        viewBox="0 0 256 256"
        focusable="false"
        aria-hidden='true'
        data-icon={name}
        width={resolvedSize}
        height={resolvedSize}
        fill={resolvedColor}
        {...restProps}
>
    {@render weightSnippet?.()}
</svg>
