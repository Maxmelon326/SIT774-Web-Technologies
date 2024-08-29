function buildCitiesList()
{
  const list = document.getElementById("list_placeholder");
  list.removeChild(list.firstElementChild);
  
  const pizzaArray = ["Americana","Hawaiian","Capricciosa","Margherita","Vegetarian","Cheese and Garlic",
    "Roast Special","Avocado", "Pesto Fetta"];

  let outputText;

  outputText = "<ul>";

  for (let i = 0; i < pizzaArray.length; i++) 
  {
      outputText += "<li>" + pizzaArray[i] + "</li>";
  }

  outputText += "</ul>";

  document.getElementById("list_placeholder").innerHTML = outputText;
}