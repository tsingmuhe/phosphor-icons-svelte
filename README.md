# @tsingmuhe/phosphor-icons-svelte

<!-- BEGIN_LOGO -->
<img src="/.github/logo.png" width="128" align="right" alt="Phosphor Icons Svelte logo" />
<!-- END_LOGO -->

Svelte 5 component library for [Phosphor Icons](https://phosphoricons.com).

- **1,512 icons** in each weight; **9,072 generated icon components** in total.
- **6 weights**: `thin`, `light`, `regular`, `bold`, `fill`, and `duotone`.

> [!NOTE]
> This is an unofficial Svelte wrapper for Phosphor Icons.

## Installation

```bash
npm install --save-dev @tsingmuhe/phosphor-icons-svelte
```

or

```bash
pnpm add -D @tsingmuhe/phosphor-icons-svelte
```

or

```bash
yarn add --dev @tsingmuhe/phosphor-icons-svelte
```

## Quick start

```svelte
<script lang="ts">
  import { HeartIcon } from '@tsingmuhe/phosphor-icons-svelte';
  import AcornIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Acorn';
</script>

<HeartIcon color="#ae2983" weight="fill" size={32} alt="Favorite" />
<AcornIcon color="teal" weight="duotone" />
```

## Import styles

Named imports are convenient and readable:

```svelte
<script lang="ts">
  import { AlarmIcon, CheckCircleIcon, HeartIcon } from '@tsingmuhe/phosphor-icons-svelte';
</script>
```

Direct imports are recommended when you want the smallest and fastest compilation path:

```svelte
<script lang="ts">
  import HeartIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Heart';
</script>
```

You may wish to import all icons at once for use in your project, though depending on your bundler this could prevent
tree-shaking and make your app's bundle larger.

```svelte
<script lang="ts">
  import * as Icons from '@tsingmuhe/phosphor-icons-svelte';

  const HeartIcon = Icons.HeartIcon;
</script>
```

## Props

Icon components accept standard SVG attributes, plus the following convenience props:

| Prop       | Type                                                              | Default        |
|------------|-------------------------------------------------------------------|----------------|
| `color`    | `string`                                                          | `currentColor` |
| `size`     | `number \| string`                                                | `1em`          |
| `weight`   | `'thin' \| 'light' \| 'regular' \| 'bold' \| 'fill' \| 'duotone'` | `regular`      |

## Icon context

Use `IconContext` to provide default values for every descendant icon. Explicit props on an icon always take precedence
over context values.

```svelte
<script lang="ts">
  import { IconContext } from '@tsingmuhe/phosphor-icons-svelte';
  import HeartIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Heart';
  import AcornIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Acorn';
</script>

<IconContext color="limegreen" size={32} weight="bold">
  <HeartIcon /> <!-- I'm lime-green, 32px, and bold! -->
  <AcornIcon color="red" /> <!-- I'm red, 32px, and bold! -->
</IconContext>
```

## Custom icons

`IconBase` is exported for advanced use cases where you want a custom icon to share the same props and context behavior
as the generated Phosphor icons.

```svelte
<script lang="ts">
    import type {Snippet} from 'svelte';
    import { IconBase } from '@tsingmuhe/phosphor-icons-svelte';
    import type {IconProps, IconWeight} from '@tsingmuhe/phosphor-icons-svelte';

    interface Props extends IconProps {
    }

    let props: Props = $props();
</script>

{#snippet thin()}
    <path d="M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z"/>
{/snippet}

{#snippet light()}
    <path d="M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z"/>
{/snippet}

{#snippet regular()}
    <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"/>
{/snippet}

{#snippet bold()}
    <path d="M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z"/>
{/snippet}

{#snippet fill()}
    <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"/>
{/snippet}

{#snippet duotone()}
    <path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"/><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"/>
{/snippet}

<IconBase {...props} name="custom" weights={{ thin, light, regular, bold, fill, duotone }}/>
```

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)

## Knowledge

- [Phosphor homepage](https://github.com/phosphor-icons/homepage)
- [@phosphor-icons/core](https://github.com/phosphor-icons/core)
- [@phosphor-icons/react](https://github.com/phosphor-icons/react)
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue)
