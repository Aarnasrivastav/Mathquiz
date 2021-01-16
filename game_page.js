player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
questionturn="player1";
answerturn="player2";
answer=0
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer turn"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    answer=number1*number2
question="<h4>Q."+number1+"X"+number2+"</h4>";
input="<br>answer-<input type='text' id='checking'>";
checkbutton="<br><button onclick='check()'>check</button>";
row=question+input+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";

}
function check(){
    getanswer=document.getElementById("checking").value;
    if(answer==getanswer){
        if(answerturn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("player_question").innerHTML="questionturn-"+player2_name;
    }
    else{
        questionturn="player1";
        document.getElementById("player_question").innerHTML="questionturn-"+player1_name;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="answerturn-"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}