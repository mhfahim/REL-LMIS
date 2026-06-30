Button is the primary action control — use for any clickable command, with `variant` setting intent and `size` setting density.

```jsx
<Button>Save record</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="outline" size="sm">Filter</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost" size="icon"><Icon name="more-horizontal" size={16} /></Button>
```

Variants: `default` (zinc primary), `secondary`, `outline`, `ghost`, `link`, `destructive`, `brand` (violet). Sizes: `sm`, `default`, `lg`, `icon`. Pair with the `Icon` component for leading/trailing glyphs.
