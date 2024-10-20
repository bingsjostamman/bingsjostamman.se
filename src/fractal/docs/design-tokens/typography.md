---
title: Typography
---

This is the font.

<div class="awesome">This should be rendered as a div</div>

```html
<p>here is a pice of code</p>
```

## Button component

{{ render '@button' }}

The button component can be included within other components like this:

```
\{{ render '@button' }}
```

This template for this component looks like this:

```
{{ view '@button' }}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{ context '@button' }}
```
