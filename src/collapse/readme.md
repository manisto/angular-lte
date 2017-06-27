The **lte-collapse directive** is essentially the same as the `uib-collapse` directive, except that it also collapses padding.

The directive has no settings.

### Example

```html
<input type="checkbox" ng-model="$ctrl.collapsed" />
<div lte-collapse="$ctrl.collapsed">
  ...
</div>
```