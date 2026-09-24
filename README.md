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
| `mirrored` | `boolean`                                                         | `false`        |
| `alt`      | `string`                                                          | `undefined`    |

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
    <path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128Z"/>
{/snippet}

{#snippet light()}
    <path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128Z"/>
{/snippet}

{#snippet regular()}
    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"/>
{/snippet}

{#snippet bold()}
    <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"/>
{/snippet}

{#snippet fill()}
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z"/>
{/snippet}

{#snippet duotone()}
    <path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"/><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"/>
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
