'use strict';

class People{
    constructor(name, gender){
    this.name = name;
    this.gender = gender;
}
};

class Apartmens{
    constructor(){
        this.house = [];
    }

    addHumen(){
        this.house.push(People);
    }
};
class residentialComplex{
    constructor(maxComplex){
        this.apartaments = [];
        this.maxComplex = maxComplex;
    }
   addApaartamets(){
    if(this.apartaments.length < this.maxComplex){
        this.apartaments.push(this.apartaments);
    }else{
        console.log(`This Apartaments is full`);
    }
   }
};

const People1 = new People('Egor', 'Male');

const People2 = new People('Nikita', 'Male');

const Apartmens1 = new Apartmens();
const Apartmens2 = new Apartmens();

Apartmens1.addHumen(People1);
Apartmens2.addHumen(People2);

const House = new residentialComplex(10);

House.addApaartamets(Apartmens1);
House.addApaartamets(Apartmens2);

console.log(House);

