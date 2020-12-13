/**
 * Author: Ali PIÇAKCI alipicakci@gmail.com
 */
; (function () {

    if (typeof console.prototype === 'function') {
        return
    }

    var logTree = require('console-log-tree')


    const getConstructorName = (o) => {
        if (o.prototype && o.prototype.constructor) {
            return o.prototype.constructor.name
        }
        return o.__proto__ && o.__proto__.constructor ? o.__proto__.constructor.name : 'Object'
    }

    const isFunction = (o) => {
        return o instanceof Function
    }

    const keysNodeAdd = (obj, node) => {
        Object.keys(obj).forEach(key => {
            node.children.push({ name: key })
        })
    }

    const getProtos = (obj) => {
        let protos = []
        let o = obj
        while (o != null) {
            let next = Object.getPrototypeOf(o)
            if (next != null) {
                let propNames = Object.getOwnPropertyNames(next)
                let node = {}
                node.name = o.__proto__ && o.__proto__.constructor ? o.__proto__.constructor.name : 'Object'
                node.children = []
                propNames.forEach(n => {
                    node.children.push({ name: n })
                })
                protos.push(node)
                o = next
            } else {
                o = null
            }
        }
        return protos
    }

    function createTree(obj) {
        let tree = []
        let root = {}
        let constructor = getConstructorName(obj)
        let staticNode = { name: 'static', children: [] }
        let instanceNode = { name: 'instance', children: [] }
        let thisNode = { name: 'this', children: [] }
        let protoNode = { name: 'prototype', children: [] }

        root.name = constructor
        root.children = []
        if (isFunction(obj)) {
            keysNodeAdd(obj, staticNode)
        } else {
            let cnt = obj.__proto__ ? obj.__proto__.constructor : undefined
            if (cnt) {
                keysNodeAdd(cnt, staticNode)
            }

            keysNodeAdd(obj, thisNode)
        }
        //prototypes
        let protos = getProtos(obj)
        protos.forEach(p => {
            protoNode.children.push(p)
        })

        instanceNode.children.push(thisNode)
        instanceNode.children.push(protoNode)

        root.children.push(staticNode)
        root.children.push(instanceNode)
        tree.push(root)

        return tree
    }

    console.prototype = function (obj) {
        var out = []
        for (let i = 0; i < arguments.length; i++) {
            const o = arguments[i];
            if (o) {
                let tree = createTree(o)
                let parse = logTree.parse(tree)
                out.push(parse)
            }
        }

        this.log.apply(this, out)
    }
})()