function playGround() {
    //Obtener un número al azar
function getRandomNumber(maxNum) {
    return Math.ceil(Math.random()*maxNum);
    }//función getRandomNumber

    function isEven(number) {
        if(number % 2 == 0){
            return "sí";
        } else{
            return "no";
        }//if 
    }//función isEven

const randomNumber = getRandomNumber(100);
const correctAnswer = isEven(randomNumber);
const userAnswer = prompt(`¿El número ${randomNumber} es un número par? Escribe "sí" o "no".`);

        if(userAnswer == correctAnswer){
             alert("Respuesta correcta");
             return true;
            } else{
                alert("Respuesta incorrecta");
                return false;
                }//if 
}//función playGround

function startGame() {
    for (let i = 0; i < 10; i++){
        const isCorrectAnswer = playGround()
        console.log(isCorrectAnswer)
                     
    if (isCorrectAnswer == false){
        alert("¡Perdiste! :(")
         break;
    }//if
                
    if (isCorrectAnswer == true && i == 9){
        alert("¡Has ganado! :)")
        }//if
    }//for 
 }//función startGame

const myButton = document.querySelector("button")

myButton.addEventListener("click", function(){
    startGame()
})//myButton Event