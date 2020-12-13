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

//static
DClass.a = 'a'
DClass.b = 'b'
DClass.c = 'c'
const o = new DClass()
console.prototype(o)

//function or class
console.prototype(DClass)
console.prototype(Function)

//object
console.prototype({})
console.prototype(Object.create(null))
console.prototype(Object.create({}))




