<script lang="ts">
    import CustomIcon from "./CustomIcon.svelte";
    import {IconContext} from "../src";
</script>

<IconContext color='red'
             size="32"
             weight='light'
             mirrored
>
    <CustomIcon data-testid="test"
                color="blue"
                size={48}
                weight="regular"
                mirrored={false}
    />
</IconContext>
