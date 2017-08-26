# fun-input
An HTML custom element implementing the `<fun-input>` element.

![fun-input in action](https://github.com/Kiricon/fun-input/raw/master/screencapture.gif)

## Setup

### Installation
```
npm i fun-input
```

---

```Html
<script src="node_modules/fun-input/fun-input.js"></script>
```
or if you're bundling
```Javascript
import "fun-input";
// or
require("fun-input");
```


## Usage
```HTML
<fun-input type="text" name="funInput" placeholder="Enter text here..."></fun-input>
<fun-input type="password" name="funInput2" placeholder="Enter password here..."></fun-input>
```


## Customization
You can customize the color of the `fun-input` by assigning values to css elements. 

The who css elements that affect `fun-input` are `--fun-input-color` and `--primary-color`.

You can set there values like so

```CSS
    :root {
        --fun-input-color: red; /* if both are set --fun-input-color takes precedence */
        --primary-color: red; 
    }
```