
var FullMenuView = function (container, model) {

	this.menuDishes = container.find("#menuDishes");

	//get all the dishes on the menu, returns the dish-objects
	var dishes = model.getFullMenu();
	var dishString = " ";

	for (var i in dishes) {
		var currentDish = dishes[i];

		// create part of dishString that will contain the values wanted for each dish
		var dishDiv = "<div class='row one'>"
						+ "<div class='col-md-6 halfPageContainer'>"
							+ "<div class='col-md-3 dish-image'>"
								+ "<img src='images/" + String(currentDish.image) + "'/>"
							+ "</div>"
							+ "<div class='col-md-8'>"
								+ "<h2 class='noMargin dishHeaderPadding'>"+ String(currentDish.name) + "</h2>"
								+ "<p>" + String(currentDish.description) + "</p>"
							+ "</div>"
						+ "</div>"
						+ "<div class='col-md-6 halfPageContainer'>"
							+ "<div class='col-md-9'>"
								+ "<h5 class='extraMargin dishHeaderPadding'>PREPARATION</h5>"
								+ "<p>" + String(currentDish.description) + "</p>"
							+ "</div>"
						+ "</div>"
					+ "</div>";
		
		dishString = dishString + dishDiv;
	}

	this.menuDishes.html(dishString);
}