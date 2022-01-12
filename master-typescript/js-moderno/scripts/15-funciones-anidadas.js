
let Name = "Adrian";

function showName(){

    let lastName = "Landazuri";

    function showLastName(){
        
        let job = "Web Developer";

        function showJob(){

            return Name + " - " + lastName + " - " + job;
       
        }

        return showJob;
   
    }

    return showLastName;
}

console.log(showName()()()); //se debe colocar un parentesis por cada función local anidad dentro de la función general