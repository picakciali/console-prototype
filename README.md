# console[prototype]
This module expands the original consol object and gains a [prototype] property. If you call this property over the console object and pass a javascript object as a parameter, it displays the object's prototype chain as a tree on the terminal.The purpose of the module is to be able to view object chains as in browsers.

## install
```javascript
    npm i console-prototype
```


## usage 
```javascript
require('console-prototype') 

class AClass{
    constructor(){
        this.aProp = 'aProp'
    }

    getAprop(){
        return this.aProp
    }
}

class BClass extends AClass{
    constructor(){
        super()
        this.bProp = 'bProp'
    }

    getBprop(){
        return this.bProp
    }
}

class CClass extends BClass{
    constructor(){
        super()
        this.cProp = 'cProp'
    }

    getCprop(){
        return this.cProp
    }
}

class DClass extends CClass{
    constructor(){
        super()
        this.dProp = 'dProp'
    }

    getDprop(){
        return this.dProp
    }
}

const o = new DClass()
console.prototype(o)

```
## out
![alt text](https://i.hizliresim.com/rxmgWm.png)

## usage 2
```javascript
const consoleProto =require('console-prototype') 
const o = new DClass()
consoleProto(o)
```


