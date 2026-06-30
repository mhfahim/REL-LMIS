Click-triggered menu of actions; pass a trigger element and items.

```jsx
<DropdownMenu align="end" trigger={<Button variant="outline" size="icon"><Icon name="more-horizontal" size={16}/></Button>}
  items={[
    { label: "Open record", icon: <Icon name="eye" size={14}/>, onSelect: () => {} },
    { separator: true },
    { label: "Flag dispute", icon: <Icon name="gavel" size={14}/>, danger: true },
  ]} />
```
