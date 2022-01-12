const car = (function (){
    let _brand, _speed = 0, _numberDoors;

    function setBrand(brand){
        _brand = brand;

        return _brand;
    }


    function getBrand(){
        return _brand;
    }

    function SpeedUp(){
        _speed++;
        return _speed;
    }

    function stop(){
        _speed--;
        return _speed;
    }

    return{
        setBrand,
        getBrand,
        SpeedUp,
        stop
    }

})();


car.setBrand("Renault");
car.SpeedUp();
car.SpeedUp();
car.SpeedUp();
car.SpeedUp();
car.SpeedUp();
car.stop();
car.stop();

console.log("Marca: " + car.getBrand() + " Velocidad: " + car.SpeedUp());