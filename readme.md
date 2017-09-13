### Introduction

Creates a series of properties on pc.attr in PlayCanvas which return attribute definitions

### Installation

```language-shell
npm intall --save playcanvas-attributes
```

### Usage

```language-javascript
import 'playcanvas-attributes'

...

var MyClass = pc.createScript('myclass');
MyClass.attributes.add('vector', pc.attr.vec3.default(0,0,1));
MyClass.attributes.add('number', pc.attr.number);
MyClass.attributes.add('texture', pc.attr.texture);
MyClass.attributes.add('enumeratedNumber', pc.attr.number
    .enum({"Test": 1, "Again": 2})
    .default(1)
);
 

```

Includes all current attributes with "sensible" names. Vector defaults can be 3 numbers, an array or
an existing pc.Vec3 e.g. `pc.Vec3.FORWARD`. Colors can be a pc.Color or an array.

Available attributes are:

`string`, `number`, `boolean`, `entity`, `animation`, `audio`, `vec3`, `curve`, `curveSet`, `model`,
`material`, `json`, `text`, `html`, `css`, `shader`, `font`, `binary`, `texture`, `scene`, `rgb`, `rgba`

### Requirements

Requires PlayCanvas Engine to be running on the page.  Uses ES6/Babel/PlayCanvas template.
