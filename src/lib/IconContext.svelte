<script lang="ts">
    import type {Snippet} from 'svelte';
    import {setIconContext} from './context';
    import type {IconContext} from './context';

    interface Props extends IconContext {
        children?: Snippet;
    }

    let props: Props = $props();
    setIconContext(() => props);
</script>

{@render props.children?.()}
