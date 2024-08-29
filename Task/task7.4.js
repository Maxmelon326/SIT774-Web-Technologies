  function addFeedback()
{
  //get input name/feedback/rating
  var name=document.getElementById("name").value;
  var feedback=document.getElementById("feedback").value;
  var rating=document.getElementById("rating").value;
  
  //positive or negative
  var cardBody;
  if(rating=="Excellent"||rating=="Good")
  {cardBody=document.getElementById("good-body");}
  else 
  {cardBody=document.getElementById("bad-body");}

  //create new table row
  var row=document.createElement("tr");

  //create table cells
  var nameCell=document.createElement("td");
  var feedbackCell=document.createElement("td");
  var ratingCell=document.createElement("td");

  //set text content for each row
  nameCell.textContent=name;
  feedbackCell.textContent=feedback;
  ratingCell.textContent=rating;

 //append cells to the row
  row.appendChild(nameCell);
  row.appendChild(feedbackCell);
  row.appendChild(ratingCell);
 
  //add row to the cardBody
  cardBody.appendChild(row); 

}


function resetform()
{
  document.getElementById("name").value = "";
  document.getElementById("feedback").value = "";
  document.getElementById("rating").value = "";
}
