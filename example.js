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
function Fnc() {
    this.a = 'a'
    this.b = 'b'
}

Fnc.prototype.getA = function () {
    return this.a
}

//class instance
console.prototype(new DClass())


//function instance
console.prototype(new Fnc())

//function instance
console.prototype(Fnc)


//class instance
console.prototype(DClass)

//null instance
console.prototype(null)


//arguments
console.prototype(Object.create(null),{},Object.create({}))













