$(document).ready(function(){
    var randomNum=Math.floor(Math.random()*101+19)
    // Selects a randomNum number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $("#targetNumber").html(randomNum);
    console.log(randomNum);
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Setting up randomNum numbers for each jewel
    // randomNum number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
    $("#winCount").html(wins);
    $("#loseCount").html(losses);
    $("#total").html(userTotal);
    //resets the game
    function reset(){
        randomNum=Math.floor(Math.random()*101+19);
        console.log(randomNum)
        $("#targetNumber").html(randomNum);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $("#total").text(userTotal);
    } 
    //adds the wins to the userTotal
    function win(){
        alert("You won!");
        wins++; 
        $("#winCount").text(wins);
        reset();
    }
    //addes the losses to the userTotal
    function lose(){
        alert ("You lose!");
        losses++;
        $("#loseCount").text(losses);
        reset()
    }
    //sets up click for jewels
        $("#one").on ("click", function(){
            userTotal = userTotal + num1;
            console.log("New userTotal= " + userTotal);
            $("#total").html(userTotal); 
                //sets win/lose conditions
            if (userTotal == randomNum){
                win();
            }
            else if ( userTotal > randomNum){
                lose();
            }   
        })  
        $("#two").on ("click", function(){
            userTotal = userTotal + num2;
            console.log("New userTotal= " + userTotal);
            $("#total").html(userTotal); 
            if (userTotal == randomNum){
                win();
            }
            else if ( userTotal > randomNum){
                lose();
            } 
        })  
        $("#three").on ("click", function(){
            userTotal = userTotal + num3;
            console.log("New userTotal= " + userTotal);
            $("#total").html(userTotal);
                //sets win/lose conditions
            if (userTotal == randomNum){
                win();
            }
            else if ( userTotal > randomNum){
                lose();
            } 
        })  
        $("#four").on ("click", function(){
            userTotal = userTotal + num4;
            console.log("New userTotal= " + userTotal);
            $("#total").html(userTotal); 
            
            if (userTotal == randomNum){
                win();
            }
            else if ( userTotal > randomNum){
                lose();
            }
        });   
    });   