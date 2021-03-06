const protoLog =require('./index.js')

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


function Fnc() {
    this.a = 'a'
    this.b = 'b'
}

Fnc.prototype.getA = function () {
    return this.a
}

//static prop add
DClass.a = 'a'
DClass.b = 'b'

//DClass instance
console.prototype(new DClass())


//Fnc instance 
console.prototype(new Fnc())

//function instance
console.prototype(Fnc)


//class instance
console.prototype(DClass)

//null instance
console.prototype(null)


//arguments
console.prototype(Object.create(null),{},Object.create({}))

//node lib
console.prototype(process)

//referance 
protoLog(new DClass())

//type funcion log ex  version [number]
console.prototype.options.type = true
console.prototype(new DClass())


