const e = require("express");

function alert1()
{ 
  const maxiumInput = document.getElementById('Maxium');
  const maxiumValue = maxiumInput.value;
  if (maxiumValue>500||maxiumValue<0)
  {
    alert('Warning! Must be between 1 and 500. Seetting to default 100!');
  }
}

function alert2()
{ 
  const divisorInput = document.getElementById('Divisor');
  const divisorValue = divisorInput.value;
  if (divisorValue==0)
  {
    alert('Warning! Can not be 0! Please input again!');
  }
}



function generateTable() 
{
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  tbl.className = "centered-table custom-width"; // Add a class to the table element
  const tblBody = document.createElement("tbody");

  let counter = 0; // Initialize a counter for the numbers

  const divisorInput = document.getElementById('Divisor');
  const divisorValue = divisorInput.value;//get disivor

  const maxiumInput = document.getElementById('Maxium');
  const maxiumValue = maxiumInput.value;//get maxium

 

  // creating all cells
  for (let i = 1; i < 12; i++) 
  {
    if(counter>maxiumValue){break;}//stop the table when counter=Maxmium
        
    // creates a table row
    const row = document.createElement("tr");

    for (let j = 1; j < 12; j++) 
    {
   
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement("td");
      const cellText = document.createTextNode(counter);
      if(counter>maxiumValue){break;} //stop table text  
      row.appendChild(cell);
      cell.appendChild(cellText);
   

    // Increment the counter for the next number
      counter++;
     

     if(isDivisible(counter-1, divisorValue))
     {
      // set the cell's class value to be:
      // class="bg-primary text-white"
      cell.className = 'bg-primary text-white';
      }
    }


    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");

  document.getElementById("demo").innerHTML =divisorValue;//show divisor in the description
  document.getElementById("demo2").innerHTML =maxiumValue;//show maxium in the description

}

//define functiobn isDivisible
function isDivisible(num, div)
{
  if( num % div === 0 ) 
  {
  return true;
  } else 
  {
  return false;
  }
}