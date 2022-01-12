

//A class is a mold

class Car{

    #n_doors = 4; //private properties only can be accesed by a void of the class and inheritance classes cannot have access to this property
    num_doors = 10; //public properties can be accesed without using any void of the class
    _num_places = 12; //prptected properties only can be accesed by a void of the class and inheritance classes also have access to this property
    //A class has properties or atributes: Are features of my class
    
    //The constructor method is the procedure that executes first in the class
    constructor(brand = "Mercedes", color = "Red", speed = 200, year = 2021){
        this.brand = brand;
        this.color = color;
        this.speed = speed;
        this.year = year;
    }

    //Voids /Actions or functions that the class does
    speedUp(){
        this.speed++;
    }

    speedDown(){
        this.speed--;
    }

    //Voids SET and GET
    set saveBrand(brand){
        this.brand = brand
    }

    get printBrand(){
        return this.brand
    }

    set numberDoors(number){
        this.#n_doors = number;
    }

    get numberDoors(){
        return this.#n_doors;   //Create a GET void to have access to a private property
    }

    get numberPlaces(){
        return this._num_places; //Create a GET void to have access to a protected property
    }

    //Static void: They can be used without instance an object
    static saludar(nombre){
        return "Hola "+ nombre;
    }
}


//Create an object of my class
let myCar = new Car();
//console.log(myCar.brand, myCar.color, myCar.speed);

let mySecondCar = new Car("Ferrari", "Red", 200, "2021");
//console.log(mySecondCar.brand, mySecondCar.color, mySecondCar.speed + "Km/h", mySecondCar.year)

mySecondCar.speedUp();
mySecondCar.speedUp();
mySecondCar.speedUp();
mySecondCar.speedUp();
mySecondCar.speedUp();
mySecondCar.speedDown();

mySecondCar.saveBrand = 'Audi'; //Set a value for the SET Void
//console.log(mySecondCar.printBrand); //Pick up a value for the GET Void

// console.log(mySecondCar.brand, mySecondCar.color, mySecondCar.speed + "Km/h", mySecondCar.year)
// console.log(Car.saludar("Adrian")); //use of a static void
// console.log(mySecondCar.numberDoors);
// console.log(mySecondCar.num_doors);
// console.log(mySecondCar.numberPlaces);
//Setters and Getters 

//Setters are voids that set a value 
//Getters are voids that pick up a value

//Inheritance -- A child class inheritance the features created in a parent class
class Quad extends Car{
    constructor(brand, color, speed, year, cilindraje = 300){             
        //Heredo las propiedades del constructor de la clase padre
        super(brand, color, speed, year); //Para agregar nuevas propiedades a un metodo constructor de una clase que hereda, debe colocarse el super()
        this.cilindraje = cilindraje;
    }

    jump(){
        return "Has saltado una rampa";
    }

}

let myQuad = new Quad("Suzuki", "Black", 150, 2022, 250);

myQuad.num_doors = 50;
myQuad.numberDoors = 10;
myQuad._num_places = 20;
myQuad.speedUp();
myQuad.speedUp();
myQuad.speedUp();
myQuad.speedDown();
myQuad.saveBrand = "Audi";
console.log(myQuad.brand, myQuad.numberDoors, myQuad._num_places);
console.log(myQuad.jump())