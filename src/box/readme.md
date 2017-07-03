The **box component** wraps the box widget from AdminLTE.

### lte-box settings

- `full-width`
  _(Default: `false`)_ -
  Set to `true` to remove padding from the body. This is typically used with table content.
- `type`
  _(Default: `default`)_ - 
  Sets the type of the box to any of the following: `default`, `primary`, `info`, `warning`, `danger` or `success`.
- `header`
  _(Default: `none`)_ -
  Sets the heading for the box.
- `loading`
  _(Default: `false`)_ -
  Controls whether or not to display the loading overlay on the box.
- `solid`
  _(Default: `false`)_ -
  Controls the layout of the box. Set to `true` to make the box more visible.
- `skip-header-border`
  _(Default: `false`)_ -
  Set to `true` to disable the bottom border from the header. This is typically used when `full-width` is `true` and the body directly contains a table.
- `collapsable`
  _(Default: `false`)_ -
  Controls if the box should be collapsable.
- `collapsed`
  _(Default: `false`)_ -
  Programatically control if the box should be collapsed.
- `removable`
  _(Default: `false`)_ -
  Set to `true` to make the box removable.
- `on-removed`
  _(Default: `angular.noop`)_ -
  Callback that is invoked when the box is removed.
- `on-toggle-collapsed`
  _(Default: `angular.noop`)_ -
  Callback that is invoked when the box is expanded or collapsed. The event has one parameter, `collapsed`.

### Box toolbar, header & footer

The box supports the following sub directives:

- `lte-box-toolbar` -
  This element can be used to supply additional content in the toolbar of the box.
- `lte-box-header` -
  Used to specify a header with custom markup. This will override the header defined on the `<lte-box />` element.
- `lte-box-footer` -
  The contents of this element will be used as the footer of the box.

The directives above can be used both as an element (`<lte-box-toolbar />`) or as an attribute (`<div lte-box-toolbar />`).

All other content of the box will be transcluded into the body.

### Example

```html
<lte-box collapsable="true" full-width="true" skip-header-border="true" on-toggle-collapsed="$ctrl.boxCollapsed = $event.collapsed;">
  <lte-box-toolbar>
    <span class="badge">7</span>
  </lte-box-toolbar>
  <div lte-box-header>
    <i class="fa fa-info"></i>
    The title of the box
  </div>
  <table>
    ...
  </table>
</lte-box>
```