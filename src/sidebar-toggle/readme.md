The **sidebar-toggle component** toggles the left sidebar for both small and regular devices.

### lte-body directive

The **body directive** controls the state of the sidebar through classes on the body element.

### lte-sidebar-toggle settings

- `screen-reader-hint`
  _(Default: `Toggle navigation`)_ -
  Sets the hint provided to screen readers.

### Example

```html
<body lte-body>
  ...
  <lte-sidebar-toggle screen-reader-hint="Toggle the navigation, man!"></lte-sidebar-toggle>
  ...
</body>
```