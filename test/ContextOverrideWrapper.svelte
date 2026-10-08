<script lang="ts">
    import CustomIcon from "./CustomIcon.svelte";
    import {IconContext} from "../src";
</script>

<IconContext color='red'
             size="32"
>
    <CustomIcon color="blue"
                size={48}
    />
</IconContext>
