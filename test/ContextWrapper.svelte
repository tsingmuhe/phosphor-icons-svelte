<script lang="ts">
    import CustomIcon from "./CustomIcon.svelte";
    import {IconContext} from "../src";
</script>

<IconContext color='red'
             size="32"
             weight='light'
             mirrored
>
    <CustomIcon>
        <text>Test</text>
    </CustomIcon>
</IconContext>