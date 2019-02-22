$(document).ready(function() {   
                       
    var randmNum = 0;
     var score, score2, score3, score4 = 0;
     var ttlScore = 0;
     var pssblRandNums = [ ];
     var pssblScores = [];
     var $crystalMath = [];
     var $diamond, $grayDiamond, $gem, $berg;
     var wins = 0;
     var losses = 0;



 /*    function generateVals(){
             for(var i = 19; i < 121; i++ ){
                     pssblRandNums[i] = i
             }
             for(var j = 2; 2 < 13; j++){
                     pssblScores[j] = j;
             }

     } */

     function randomize() {
             randmNum = Math.floor(Math.random() * 20 + 121);
             score = Math.floor(Math.random() * 20 + 2);
             score2 = Math.floor(Math.random() * 20 + 2);
             score3 = Math.floor(Math.random() * 20 + 2);
             score4 = Math.floor(Math.random() * 20 + 2);

             $("#wnngVal").html(randmNum);

     }


     function scrUpdate() {

             $("#winLossText").html("Wins: " + wins + " Losses: " + losses );
       
     }




     function checkState() {

             if(ttlScore == randmNum)
             {
                     wins++;
                     scrUpdate();
                     ttlScore = 0;
                     randomize();
             }
             else if(ttlScore > randmNum)
             {
                     losses++;
                     scrUpdate();
                     ttlScore = 0;
                     randomize();
             }
             else{
                     scrUpdate()
             }

     }




     function intialize(){
           //  generateVals();
           console.log("In intialize");
             //debugger;
             randomize();
           //  debugger;
             $diamond = $("#diamond");
             $grayDiamond = $("#grayDiamond");
             $berg = $("#berg");
             $gem = $("#gem");


             $diamond.click(function(){
                     console.log("I made it here!");
                     ttlScore += score;
                     $("#scoreText").html("Currennt Score: " + ttlScore);
                     checkState();

             });

             $grayDiamond.click(function(){
                     ttlScore += score2;
                     $("#scoreText").html("Currennt Score: " + ttlScore);
                     checkState();

             });

             $berg.click(function(){
                     ttlScore += score3;
                     $("#scoreText").html("Currennt Score: " + ttlScore);
                     checkState();

             });
             
             $gem.click(function(){
                     ttlScore += score4;
                     $("#scoreText").html("Currennt Score: " + ttlScore);
                     checkState();

             });

             

            



     }

     //console.log("I'm running.");
     intialize();
     
});