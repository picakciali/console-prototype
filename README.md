# console[prototype]
This module expands the original consol object and gains a [prototype] property. If you call this property over the console object and pass a javascript object as a parameter, it displays the object's prototype chain as a node on the console.The purpose of the module is to be able to view object chains as in browsers.


## usage
```javascript
    console.prototype({})
    console.prototype(new Class())
    
    //root
      |_static properties
      |_instance constructor
        |_this.x
        |_this.y
      |_and chain 
    
```
## usage 
```javascript
require('./index.js')

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
        this.bProp = 'aProp'
    }

    getBprop(){
        return this.aProp
    }
}

class CClass extends BClass{
    constructor(){
        super()
        this.cProp = 'cProp'
    }

    getCprop(){
        return this.aProp
    }
}

class DClass extends CClass{
    constructor(){
        super()
        this.dProp = 'dProp'
    }

    getDprop(){
        return this.aProp
    }
}

const o = new DClass()
console.prototype(o)

```
## out
![alt text](https://i.hizliresim.com/wIMWA2.png)


