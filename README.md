# fun-tabs
An HTML custom element implementing the `<fun-tabs>` tag.

![fun-input in action](https://github.com/Kiricon/fun-tabs/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i fun-tabs
```

---

```Html
<script src="node_modules/fun-tabs/fun-tabs.js"></script>
```
or if you're bundling
```Javascript
import "fun-tabs";
// or
require("fun-tabs");
```


## Usage
```HTML
    <fun-tabs selected="0">
        <fun-tab>Tab 1</fun-tab>
        <fun-tab>Tab 2</fun-tab>
        <fun-tab>Tab 3</fun-tab>
    </fun-tabs>
```


## Customization
You can customize the color of the `fun-tabs` by assigning values to css elements. 

The two css elements that affect `fun-tabs` are `--fun-tabs-color` and `--secondary-color`.

You can set there values like so

```CSS
    :root {
        --fun-tabs-color: red; /* if both are set --fun-tabs-color takes precedence */
        --secondary-color: red; 
    }
```