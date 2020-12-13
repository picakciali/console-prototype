/**
 * Author: Ali PIÇAKCI alipicakci@gmail.com
 */
; (function () {

    if (typeof console.prototype === 'function') {
        return
    }

    const logTree = require('console-log-tree')


    const getProtoConstructorName = (o) => o.__proto__ && o.__proto__.constructor ? o.__proto__.constructor.name : 'Object'

    const getConstructorName = (o) => {
        if (o.prototype && o.prototype.constructor) {
            return o.prototype.constructor.name
        }
        return getProtoConstructorName(o)
    }

    const isFunction = (o) => {
        return o instanceof Function
    }

    const keysNodeAdd = (obj, node) => {
        Object.keys(obj).forEach(key => {
            node.children.push({ name: key })
        })
    }

    //{name: x , children:[name:x , children :[]]}
    const getProtos = (obj) => {
        let root = {}
        root.name = getProtoConstructorName(obj)
        root.children = []
        let o = obj
        let n
        while (o != null) {
            let next = Object.getPrototypeOf(o)
            if (next != null) {
                let propNames = Object.getOwnPropertyNames(next)
                let node = {}
                node.name = getProtoConstructorName(o)
                node.children = []
                propNames.forEach(n => {
                    node.children.push({ name: n })
                })
                if (!n) {
                    root.children.push(node)
                }else{
                  n.children.push(node)  
                }
                n = node
                o = next
            } else {
                o = null
            }
        }
        return root
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
        protoNode.children.push(protos)

        instanceNode.children.push(thisNode)
        instanceNode.children.push(protoNode)

        root.children.push(staticNode)
        root.children.push(instanceNode)
        tree.push(root)

        return tree
    }

    console.prototype = function () {
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