The **lte-wrapper directive** handles the height of the content area. This is necessary due to the way the layout is styled.

The directive reacts on window resize events, although the handling is throttled using requestAnimationFrame to avoid performance issues.

The directive has no settings.

### Example

```html
<div class="wrapper" lte-wrapper>
  <div class="main-header">
    ...
  </div>
  <div class="main-sidebar">
    ...
  </div>
  <div class="content-wrapper">
    ...
  </div>
  <div class="main-footer">
    ...
  </div>
</div>
```
