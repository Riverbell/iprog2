//ExampleView Object constructor
var AllDishesView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.allDishes = container.find("#allDishes");

	//gets all dishes
	var dishes = model.getAllDishes2();
	//console.log(dishes);


	var dishString = " ";

	// for each dish, add the info into the correct container
	for (var i = 0; i < dishes.length; i++) {
		var currentDish = dishes[i];
		var dishDiv = "<div class='dish-container'><div class='dish-image'><img src='images/" 
		+ String(currentDish.image) + "'/></div><div class='dish-name'>" + String(currentDish.name) 
		+ "</div><div class='dish-info'>" + String(currentDish.description) + "</div></div>";
		dishString = dishString + dishDiv;
	}
	//console.log(dishString);

	this.allDishes.html(dishString);
}
 
