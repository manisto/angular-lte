The **lte-treeview directive** handles the left navigation menu by controlling whether the elements are expanded or collapsed.

### lte-treeview

The `lte-treeview` directives serves as a container for the menu item structure.
Both the `lte-treeview-toggle` and the `lte-treeview-menu` directives register themselves with the nearest `lte-treeview`.
The directive only has one setting, `active`, whichs controls whether or not the menu is expanded.
This is typically used together with a router to open the menu with the active state.

### lte-treeview-toggle

This directive should be applied to the link that controls the treeview. By default, the directive displays a caret
as the handle for the menu. However, if the directive has any content, then the content will be transcluded in place
of the caret handle. This can be useful for things such as labels or custom handles.

The directive has the following settings:

- `icon`
  _(Default: `none`)_ -
  Sets the icon of the toggle. The directive supports fontawesome, glyphicon and ion icons.
- `header`
  _(Default: `none`)_ -
  Sets the heading for the toggle.

### lte-treeview-menu

This directive enables the collapse functionality on the treeview menu. Only one menu under the same treeview
can be open at the same time.

### Example

```html
<li class="treeview" lte-treeview active="$state.includes('dashboard')">
  <a ui-sref="dashboard.v1" lte-treeview-toggle icon="fa fa-diamond" header="Dashboard V1">
    <span class="badge">5 new</span>
  </a>
  <ul lte-treeview-menu>
    ...
  </ul>
</li>
```