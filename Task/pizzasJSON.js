const pizzaSalesListJSON = {
    pizzas: [
        { name: "Americana", numberSold: 7912, userRating: 2.3 },
        { name: "Hawaiian", numberSold: 5499, userRating: 4.3 },
        { name: "Capricciosa", numberSold: 1141, userRating: 3.8 },
        { name: "Margherita", numberSold: 12957, userRating: 2.0 },
        { name: "Vegetarian", numberSold: 2366, userRating: 4.9 },
        { name: "Cheese and Garlic", numberSold: 10090, userRating: 4.3 },
        { name: "Roast Special", numberSold: 4789, userRating: 3.8 },
        { name: "Avocado", numberSold: 223, userRating: 1.5 },
        { name: "Pesto Fetta", numberSold: 5829, userRating: 4.6 }
    ]
};


//create table
function generateTable() 
{   const outputElement = document.getElementById("description");
    outputElement.textContent = "The following table has been dynamically generated from JSON data:";
    
    var pizza1 ={ name: "Americana", numberSold: 7912, userRating: 2.3,salesCategory:salesCategory(2.3)};
    var pizza2 ={ name: "Hawaiian", numberSold: 5499, userRating: 4.3,salesCategory:salesCategory(4.3) };
    var pizza3 ={ name: "Capricciosa", numberSold: 1141, userRating: 3.8,salesCategory:salesCategory(3.8) };
    var pizza4 ={ name: "Margherita", numberSold: 12957, userRating: 2.0,salesCategory:salesCategory(2.0) };
    var pizza5 ={ name: "Vegetarian", numberSold: 2366, userRating: 4.9,salesCategory:salesCategory(4.9) };
    var pizza6 ={ name: "Cheese and Garlic", numberSold: 10090, userRating: 4.3,salesCategory:salesCategory(4.3)};
    var pizza7 ={ name: "Roast Special", numberSold: 4789, userRating: 3.8,salesCategory:salesCategory(3.8) };
    var pizza8 ={ name: "Avocado", numberSold: 223, userRating: 1.5,salesCategory:salesCategory(1.5) };
    var pizza9 ={ name: "Pesto Fetta", numberSold: 5829, userRating: 4.6,salesCategory:salesCategory(4.6) };
    var pizzas,output,listLength,i;
    pizzas=[pizza1,pizza2,pizza3,pizza4,pizza5,pizza6,pizza7,pizza8,pizza9];

    listLength=pizzas.length;
    output = "<table class='table'>" + "<tr><th class='bold-header'>Pizza Name</th><th class='bold-header'>Number Sold</th><th class='bold-header'>User Rating</th><th class='bold-header'>Sales Category</th></tr>";
    // creating all cells
    for (i = 0; i < listLength; i++) 
    {
      // creates a table row
      //if i%2 is even then return alternate-row, else retrun "", then css will highlight alternate-row.
      output+= "<tr" +(i % 2 === 0 ? " class='alternate-row'" : "") + "><td>"+pizzas[i].name + "</td><td>" + pizzas[i].numberSold + "</td><td>" + pizzas[i].userRating + "</td><td>" + pizzas[i].salesCategory + "</td></tr>";
      }
  
      output +="</table>";
      document.getElementById("table").innerHTML=output;

    const outputElement1 = document.getElementById("description1");
    outputElement1.textContent = "Some statistics on the pizzas sold across all types:"

//create statistics:
var sum=0;//Use temporary variable to accumulate to avoid to change the maxium number of Piazzs Array.
//sum=pizzas.reduce((previous, current) => current.numberSold += previous,0);//这个方法会改变pizzas 数组的最大值，不能使用！

var maxnumberSold=-Infinity;//初始化用负无穷大，make sure to find the max number.
var maxPizza=null;//寻找最大值的过程中，把pizza number存下来。

pizzas.forEach(pizza => {sum += pizza.numberSold;
    if (pizza.numberSold > maxnumberSold) 
    {
        maxnumberSold = pizza.numberSold;
        maxPizza= pizza.name;
    }
});
var avg=sum/listLength;
avg = avg.toFixed(1); 

var sum2=0
pizzas.forEach(pizza => {sum2 += pizza.userRating;});//forEach 是js数组迭代的方法！
var avg2=sum2/listLength;
avg2 = avg2.toFixed(1); 


//sum2=pizzas.reduce((previous, current) => current.userRating += previous,0);
//avg2=sum2/listLength;
//avg2 = avg2.toFixed(1); 

//const arr=[pizza1.numberSold,pizza2.numberSold,pizza3.numberSold,pizza4.numberSold,pizza5.numberSold,pizza6.numberSold,pizza7.numberSold,pizza8.numberSold,pizza9.numberSold];
//let maxium=Math.max.apply(null,arr);//这个方法也可以计算最大值
const numberSoldArray=pizzas.map(pizza => pizza.numberSold);
const maxium=Math.max(...numberSoldArray);//拓展运算符



const outputElement2 = document.getElementById("description2");
outputElement2.innerHTML= "<li>Average number of pizzas sold:"+ avg+"</li>";

const outputElement3 = document.getElementById("description3");
outputElement3.innerHTML = "<li>Best selling pizza name:"+ maxPizza+"</li>";

const outputElement4 = document.getElementById("description4");
outputElement4.innerHTML= "<li>Best selling pizza total:"+ maxium+"</li>";

const outputElement5 = document.getElementById("description5");
outputElement5.innerHTML = "<li>User Rating:"+ avg2+"</li>";

const outputElement6 = document.getElementById("description6");
outputElement6.innerHTML = "Averages caculated from summing up all the <i>numberSold</i> and <i>UserRating</i>values and dividing each by the total number of pizzas in the list."



}

    


//
function salesCategory(userRating) 
{
    // Should use the input 'userRating' and return a string
    // with the full name (HINT: a switch() statement)
    if(userRating>=0.0&&userRating<2.0)
    {return "Below Average";}
    else if(userRating>=2.0&&userRating<3.0)
    {return "Pretty Good";}
    else if(userRating>=3.0&&userRating<4.0)
    {return "Great";}
    else if (userRating>=4.0&&userRating<4.5)
    {return "Fantastic";}
    else if (userRating>=4.5)
    {return "Outstanding";}
    else{return "invalid userRating!"}
}

