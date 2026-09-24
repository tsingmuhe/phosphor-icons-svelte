<script lang="ts">
    import {IconBase} from '../src';
    import type {IconProps} from '../src';

    interface Props extends IconProps {
    }

    let props: Props = $props();
</script>

{#snippet thin()}
    <path>thin</path>
{/snippet}

{#snippet light()}
    <path>light</path>
{/snippet}

{#snippet regular()}
    <path>regular</path>
{/snippet}

{#snippet bold()}
    <path>bold</path>
{/snippet}

{#snippet fill()}
    <path>fill</path>
{/snippet}

{#snippet duotone()}
    <path>duotone</path>
{/snippet}

<IconBase {...props} weights={{ thin, light, regular, bold, fill, duotone }}/>
