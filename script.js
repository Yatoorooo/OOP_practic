"use strict";

class People{
  constructor(name , age){
    this.name = name;
    this.age = age;
  }
};

class Appartament{
  constructor(){
   this.house = [];
  }

  addPeople(people){
    this.house.push(people);
  }
};

class Complex{
  constructor(maxComplex){
  this.complex = [];
  this.maxComplex = maxComplex;
  }
  addComplex(complex){
    if(this.complex.length < this.maxComplex){
      this.complex.push(complex);
    }else{
      console.log(`Sorry, complex is full.`)
    }

  }
  showInfo(){
    console.log(`Complex information`);
    this.complex.forEach((complex, index)=>{
      console.log(`This complex ${index + 1}`)
      complex.house.forEach((house, index)=>{
    console.log(`People ${index + 1} ${house.name}`)
      })
    })
  }
};


const human1 = new People('Egor', 20);
const human2 = new People('Nikita', 20);

const complex1 = new Appartament();
const complex2 = new Appartament();

complex1.addPeople(human1);
complex2.addPeople(human2);

const house = new Complex(5);

house.addComplex(complex1)
house.addComplex(complex2);

house.showInfo();