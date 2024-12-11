---
title: Fonts
---

<link rel="stylesheet" href="/assets/css/styles.css">

## Alegreya


<div style="font-size: 20px;">
	<div style="font-family: 'Alegreya'; font-weight: 400;">The quick brown fox 400</div>
	<div style="font-family: 'Alegreya'; font-weight: 500;">The quick brown fox 500</div>
	<div style="font-family: 'Alegreya'; font-weight: 600;">The quick brown fox 600</div>
	<div style="font-family: 'Alegreya'; font-weight: 700;">The quick brown fox 700</div>
	<div style="font-family: 'Alegreya'; font-weight: 800;">The quick brown fox 800</div>
	<div style="font-family: 'Alegreya'; font-weight: 900;">The quick brown fox 900</div>
</div>

<div style="font-size: 20px;">
	<div style="font-family: 'Alegreya'; font-weight: 400; font-style: italic;">The quick brown fox 400</div>
	<div style="font-family: 'Alegreya'; font-weight: 500; font-style: italic;">The quick brown fox 500</div>
	<div style="font-family: 'Alegreya'; font-weight: 600; font-style: italic;">The quick brown fox 600</div>
	<div style="font-family: 'Alegreya'; font-weight: 700; font-style: italic;">The quick brown fox 700</div>
	<div style="font-family: 'Alegreya'; font-weight: 800; font-style: italic;">The quick brown fox 800</div>
	<div style="font-family: 'Alegreya'; font-weight: 900; font-style: italic;">The quick brown fox 900</div>
</div>

## Alegreya Sans

<div style="font-size: 20px;">
	<div style="font-family: 'Alegreya Sans'; font-weight: 100;">The quick brown fox 100</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 300;">The quick brown fox 200</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 400;">The quick brown fox 300</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 500;">The quick brown fox 400</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 700;">The quick brown fox 500</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 800;">The quick brown fox 600</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 900;">The quick brown fox 700</div>
</div>

<div style="font-size: 20px;">
	<div style="font-family: 'Alegreya Sans'; font-weight: 100; font-style: italic;">The quick brown fox 100</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 300; font-style: italic;">The quick brown fox 200</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 400; font-style: italic;">The quick brown fox 300</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 500; font-style: italic;">The quick brown fox 400</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 700; font-style: italic;">The quick brown fox 500</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 800; font-style: italic;">The quick brown fox 600</div>
	<div style="font-family: 'Alegreya Sans'; font-weight: 900; font-style: italic;">The quick brown fox 700</div>
</div>

## Playright

<div style="font-size: 20px;">
	<div style="font-weight: 400;">& 400</div>
	<div style="font-weight: 500;">& 500</div>
	<div style="font-weight: 600;">& 600</div>
	<div style="font-weight: 700;">& 700</div>
</div>

<div style="font-size: 20px;">
	<div style="font-weight: 400; font-style: italic;">& 400</div>
	<div style="font-weight: 500; font-style: italic;">& 500</div>
	<div style="font-weight: 600; font-style: italic;">& 600</div>
	<div style="font-weight: 700; font-style: italic;">& 700</div>
</div>




<div class="awesome">This should be rendered as a div</div>

```html
<p>here is a piece of code</p>
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
