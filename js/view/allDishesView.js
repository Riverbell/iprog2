//ExampleView Object constructor
var AllDishesView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var dishContainer = this.dishContainer = container.find("#allDishes");
	
	this.currType = String(container.find("#dishType option:selected").val());
	console.log(this.currType);
	var dishes = model.getAllDishes(this.currType);
	

	// function that loads all the dishes
	var loadDishes = function() {
		
		//gets all dishes
		//console.log(this.currType);

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

		dishContainer.html(dishString);
	}

	// load dishes on initialization
	loadDishes();
}
 
