# console[prototype]
This module expands the original consol object and gains a [prototype] property. If you call this property over the console object and pass a javascript object as a parameter, it displays the object's prototype chain as a node on the terminal.The purpose of the module is to be able to view object chains as in browsers.

## install
```javascript
    npm i console_prototype
```

## usage 
```javascript
require('console_prototype')
    
    
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


