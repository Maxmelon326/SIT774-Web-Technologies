function greeting() 
{
   //get name
  inputElement= document.getElementById("name");
  inputValue=inputElement.value;

  //get time
  const d = new Date();
  const time=d.getHours();
  var output1;
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = dayOfWeek[d.getDay()];
  const month = monthNames[d.getMonth()];
  const date = d.getDate();
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  const remainingMinutes = (23 - hours) * 60 + (60 - minutes);



  switch(true)
  {
    case time < 11:
    output1= "morning"
    break;
    case time>=11&&time<14:
    output1="day"
    break;
    case time>=14&&time<18:
    output1="afternoon"
    break;
    case time>=18:
    output1="evening"
    break;
  }
  document.getElementById("time1").innerHTML="Greetings <b>"+inputValue+"</b>! We hope you are having a wonderful "+output1+" !"
  document.getElementById("time2").innerHTML="Today's date is <b>"+day+" "+month+" "+date+" "+year+" "+"</b>and a total of <b>"+" "+hours+" "+"</b>hours<b>"+" "+minutes+" "+"</b>minutes have passed."
  document.getElementById("time3").innerHTML="Hope you enjoy the remaining<b>"+" "+remainingMinutes+" "+"</b>minutes left in the day!"
}


function changeBackgroundColor() 
{
  const myDiv = document.getElementById("myDiv");
  myDiv.style.backgroundColor = "yellow";
}

function resetBackgroundColor() 
{
  const myDiv = document.getElementById("myDiv");
  myDiv.style.backgroundColor = ""; // back to origin
}