

function enumerate(definition, enumeration) {
    if (!enumeration) return definition
    let defEnum = definition.enum = []
    for (var k in enumeration) {
        let obj = {}
        obj[k] = enumeration[k]
        defEnum.push(obj)
    }
    return definition
}

function make(item) {
    item.default = function (x, y, z) {
        if (x instanceof pc.Vec3) {
            x = [x.x, x.y, x.z]
        }
        if(x instanceof pc.Color) {
            x: [x.r, x.g, x.b, x.a]
        }
        if (y) {
            x = [x || 0, +y, z || 0]
        }
        return make(() => {
            let result = item()
            result.default = x
            return result
        })
    }
    item.enum = function (settings) {
        return make(() => enumerate(item(), settings))
    }
    return item
}

const types = {
    number: make(function () {
        return {type: 'number'}
    }),
    vec3: make(function () {
        return {type: 'vec3', default: [0,0,0]}
    }),
    string: make(function () {
        return {type: 'string'}
    }),
    boolean: make(function () {
        return {type: 'boolean'}
    }),
    animation: function () {
        return {type: 'asset', assetType: 'animation'}
    },
    text: function () {
        return {type: 'asset', assetType: 'text'}
    },
    json: function () {
        return {type: 'asset', assetType: 'json'}
    },
    audio: function () {
        return {type: 'asset', assetType: 'audio'}
    },
    scene: function () {
        return {type: 'asset', assetType: 'scene'}
    },
    shader: function () {
        return {type: 'asset', assetType: 'shader'}
    },
    binary: function () {
        return {type: 'asset', assetType: 'binary'}
    },
    font: function () {
        return {type: 'asset', assetType: 'font'}
    },
    css: function () {
        return {type: 'asset', assetType: 'css'}
    },
    html: function () {
        return {type: 'asset', assetType: 'html'}
    },
    texture: function () {
        return {type: 'asset', assetType: 'texture'}
    },
    material: function () {
        return {type: 'asset', assetType: 'material'}
    },
    model: function () {
        return {type: 'asset', assetType: 'model'}
    },
    entity: function () {
        return {type: 'entity'}
    },
    curve: function () {
        return {type: 'curve'}
    },
    curveSet: function () {
        return {type: 'curveSet'}
    },
    rgb: function() {
        return {type: 'rgb'}
    },
    rgba: function() {
        return {type: 'rgba'}
    }

}

pc.attr = {}

for (var a in types) {
    (function (a) {
        Object.defineProperty(pc.attr, a, {get: () => types[a]})
    })(a)
}


export default types
