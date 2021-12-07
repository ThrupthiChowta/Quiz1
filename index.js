var chalk=require("chalk");
var readlinesync=require("readline-sync");
console.clear();
console.log(chalk.bold.blue.underline("<<<<< Welcome to the game >>>>>"));
var name = readlinesync.question("Enter your Name: ");
console.log("Hii "+chalk.yellow(name)+" Let's see how much you know Thrupthi !!");
console.log(chalk.yellow("_____________________________________________________________"));
var response1 = readlinesync.question("Type 'Yes' to continue or 'No' to quit:");
var response=response1.toLowerCase()
var score=0;

function play(){
  var plays=[{question:"What is Thrupthi's favourite Colour ?[Green/Blue]: ",answer:"green"},{question:"What is Thrupthi's favourite pet ? [Cat/Dog]: ",answer:"dog"},{question:"What is Thrupthi's favourite food ?[Poori/MasalDosa]:",answer:"masaldosa"},{question:"Thrupthi is good at? [Drawing/Painting]:",answer:"drawing"},{question:"What is Thrupthi's mother tongue ?[Tulu/Marathi]:",answer:"tulu"}];

  for(var i=0;i<plays.length;i++){
    //console.log(plays[i].question );
    var uans=readlinesync.question(plays[i].question).toLowerCase();
    //var uans=uans1.toLowerCase();
    if(uans===plays[i].answer){
      console.log(chalk.rgb(35,48,200)("Hurray you answered right!!!"));
      score=score+2;
      console.log(chalk.red("Your score:",score));
      console.log(chalk.rgb(230,230,250)("***********************************************"));
      
    }else
   {
      console.log(chalk.rgb(1,32,200)("Nahh you answered wrong :( "));
      score=score-1;
      console.log(chalk.red("Your score:",score));
      console.log(chalk.rgb(230,230,250)("***********************************************"));
   }
  }
  console.log(chalk.yellow("Your total score is:")+chalk.bold.green(score));
  console.log(chalk.rgb(255,182,193)("Thanks for playing the game :)"));

}

if(response==="yes"){
  console.log(chalk.green("your response is yess, Let play the game !!"));
  console.log(chalk.rgb(18,13,180)("_____________________________________________________________"));
  play();

}
else if(response==="no"){
  console.log(chalk.red("your response is 'NO' so cannot play the game!!"));
//process.exit();
}else{
  console.log(chalk.red("invalid response!!"));
  //process.exit();
}
