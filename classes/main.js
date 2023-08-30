

class Dog{
    constructor(name){
        this._name = name;
        this._behavior=0;
    }
    get name(){
        return this._name
    }
    get behavior(){
        return this._behavior
    }
    incrementBehavior(){
        this._behavior++
    }
}

const halley = new Dog('Halley')

console.log(halley.name);
halley.incrementBehavior()
console.log(halley.name,halley.behavior);

//------------------------------------------------------------


class Surgeon{
    constructor(name,department){
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name(){
        return this._name
    }
    get department(){
        return this._department
    }
    get remainingVacationDays(){
        return this._remainingVacationDays
    }
    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff
    }
}

const surgeonKerem = new Surgeon('Kerem','Norology')
const surgeonZako = new Surgeon('Zako','Emergency')

console.log(surgeonKerem.name);

surgeonKerem.takeVacationDays(4)
console.log(surgeonKerem.remainingVacationDays);

//----------------------------------------------

class HospitalEmployee{
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name(){
        return this._name
    }
    get remainingVacationDays(){
        return this._remainingVacationDays
    }
    takeVacationDays(daysOff){
        this._remainingVacationDays -= daysOff
    }
    static generatePassword(){
        const randomNumber = Math.ceil(Math.random()*10000) // Math.round for the nearest integer Math.floor round number down for the nearest integer
        return randomNumber;
    }
}

class Nurse extends HospitalEmployee{
    constructor(name,certifications){
        super(name);
        this._certifications = certifications
    }
    get certifications(){
        return this._certifications
    }
    addCertification(newCertification){
        this._certifications.push(newCertification)
    }

   
}

const veslyNurse = new Nurse('Vesly',['camo','xsa'])
veslyNurse.takeVacationDays(9)

console.log(veslyNurse.remainingVacationDays);

veslyNurse.addCertification('genetics')
console.log(veslyNurse.certifications);



class Doctors extends HospitalEmployee{
    constructor(name,insurance){
        super(name);
        this._insurance = insurance;
    }
    get insurance(){
        return this._insurance;
    }
}



