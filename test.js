


// test cases

let arraySolve = [["2,0", "love", "house", "hi", "chair"], ["3,0", "live", "hose", "ha", "char"]];

// do the test strings contain these terms?
function gameLoop() {

    for (let i = 0; i < 1; i++) {

        let noGreen = ["chair", "house", "couch"];
        let permutation = 0;
        // run the tests against every element in the array
        // let test1 = conditions.some(element => array1.includes(element));
        let testNoGreen = noGreen.some(element => arraySolve[permutation].includes(element));

        // display results
        //console.log(array1, ' ===> ', test1);
        console.log(arraySolve, ' ===> ', testNoGreen);
        permutation = permutation + 1;
        if (permutation = 10) {
            return;
        }
    }

}
gameLoop();

let stageFright = arraySolve[permutation].includes("0,0") || arraySolve[permutation].includes("3,0");

let hasLegs = arraySolve[permutation].includes("0,1") || arraySolve[permutation].includes("0,2") || arraySolve[permutation].includes("0,3") || arraySolve[permutation].includes("0,0"); 
            
let hasGreen = arraySolve[permutation].includes("0,1") || arraySolve[permutation].includes("4,1") || arraySolve[permutation].includes("0,3");

let hasTurns = arraySolve[permutation].includes("1,0") || arraySolve[permutation].includes("1,1") || arraySolve[permutation].includes("1,2") || arraySolve[permutation].includes("2,0") || arraySolve[permutation].includes("2,1") || arraySolve[permutation].includes("2,2");

let blueTurns = arraySolve[permutation].includes("1,2") || arraySolve[permutation].includes("2,2") || arraySolve[permutation].includes("3,2") || arraySolve[permutation].includes("4,2");

stageFright - "can't get it up for the game!"
!"Forward+Orange"
!"GreenPen+Orange"

hasLegs - "got no legs and no zippy wheelchair!"
!"Forward+Green"
!"Forward+Grey"
!"Forward+Orange" 

hasGreen - "no green forward and no fucking plan!"
!"Forward+Green"
!"OrangePen+Green"
!"Forward+Grey"


hasTurns - "can't turn a fucking corner!"

!"TurnLeft+Orange"
!"TurnLeft+Green"
!"TurnLeft+Blue"
!"TurnRight+Orange"
!"TurnRight+Green"
!"TurnRight+Blue"

blueTurns - "picnic on the blue square!"
!"TurnLeft+Blue"
!"TurnRight+Blue"
!"GreenPen+Blue"
!"OrangePen+Blue"

"Loopy Lou on the lawn!"

LoopyLou
"Forward+Green"
"OrangePen+Green"
"Forward+Grey"
    but
"TurnLeft+Green" is also true. 
//If this is true, it's because it's looping. Otherwise, it would go off the board already. 

/**I
 *  had a @param "Let's all have a game of paint ball!", but I've not quite figured out what i was doing with it. 
*/ 
