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

| Prop       | Type                                                              | Default        | Description                                                                                                                                 |
|------------|-------------------------------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `color`    | `string`                                                          | `currentColor` | SVG fill color. Use any valid CSS color value.                                                                                              |
| `size`     | `number \| string`                                                | `1em`          | Width and height of the icon. Numbers are passed to SVG as numeric dimensions; strings may include units such as `px`, `%`, `em`, or `rem`. |
| `weight`   | `'thin' \| 'light' \| 'regular' \| 'bold' \| 'fill' \| 'duotone'` | `regular`      | Visual style/weight of the icon.                                                                                                            |
| `mirrored` | `boolean`                                                         | `false`        | Flips the icon horizontally with `transform="scale(-1, 1)"`. Useful for RTL layouts or directional icons.                                   |
| `alt`      | `string`                                                          | `undefined`    | Renders a `<title>` element inside the SVG for accessible labeling.                                                                         |

## Icon context

Use `IconContext` to provide default values for every descendant icon. Explicit props on an icon always take precedence
over context values.

```svelte
<script lang="ts">
  import { IconContext } from '@tsingmuhe/phosphor-icons-svelte';
  import HeartIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Heart';
  import AcornIcon from '@tsingmuhe/phosphor-icons-svelte/icons/Acorn';
</script>

<IconContext color="limegreen" size={32} weight="bold" mirrored={false}>
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
    <path d="M128 24 232 216H24L128 24Z" />
{/snippet}

{#snippet light()}
    <path d="M128 24 232 216H24Z" />
{/snippet}

{#snippet regular()}
    <path d="M128 24 232 216H24Z" />
{/snippet}

{#snippet bold()}
    <path d="M128 24 232 216H24Z" />
{/snippet}

{#snippet fill()}
    <path d="M128 24 232 216H24Z" />
{/snippet}

{#snippet duotone()}
    <path d="M128 24 232 216H24Z" />
{/snippet}

<IconBase {...props} weights={{ thin, light, regular, bold, fill, duotone }}/>
```

## License

MIT © [Phosphor Icons](https://github.com/phosphor-icons)

## Knowledge

- [Phosphor homepage](https://github.com/phosphor-icons/homepage)
- [@phosphor-icons/core](https://github.com/phosphor-icons/core)
- [@phosphor-icons/react](https://github.com/phosphor-icons/react)
- [@phosphor-icons/vue](https://github.com/phosphor-icons/vue)
