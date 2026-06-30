Modal dialog for focused tasks and confirmations.

```jsx
const [open, setOpen] = React.useState(false);
<Dialog open={open} onClose={() => setOpen(false)} title="Delete dag DAG-1184?" description="This action cannot be undone.">
  <DialogFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="destructive">Delete</Button>
  </DialogFooter>
</Dialog>
```
