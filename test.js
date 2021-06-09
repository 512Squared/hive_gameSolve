


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

let stageFright = arraySolve[permutation].includes("Forward+Orange") || arraySolve[permutation].includes("GreenPen+Orange");

let noGreenNoPaint = arraySolve[permutation].includes("Forward+Green") || arraySolve[permutation].includes("OrangePen+Green") || arraySolve[permutation].includes("Forward+Grey");

let noTurns = arraySolve[permutation].includes("TurnLeft+Orange") || arraySolve[permutation].includes("TurnLeft+Green") || arraySolve[permutation].includes("TurnLeft+Blue") || arraySolve[permutation].includes("TurnRight+Orange") || arraySolve[permutation].includes("TurnRight+Green") || arraySolve[permutation].includes("TurnRight+Blue");

let noForward = arraySolve[permutation].includes("Forward+Green") || arraySolve[permutation].includes("Forward+Blue") || arraySolve[permutation].includes("Forward+Grey") || arraySolve[permutation].includes("Forward+Orange"); 

let blueCorner = arraySolve[permutation].includes("TurnLeft+Blue") || arraySolve[permutation].includes("TurnRight+Blue") || arraySolve[permutation].includes("GreenPen+Blue") || arraySolve[permutation].includes("OrangePen+Blue");
