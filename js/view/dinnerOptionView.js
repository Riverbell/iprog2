//ExampleView Object constructor
var DinnerOptionView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	var numberOfGuests = container.find("#numberOfGuests");
	var menuContainer = container.find("#menuTable");

	console.log("hej hopp pris", model.getTotalMenuPrice());

	var loadView = function() {
		numberOfGuests.html(model.getNumberOfGuests());

		var dinnerString = "<tr class='table-header'>"
						+ "<td>Dish name</td>"
						+ "<td class='right-align'>Cost</td>"
					+ "</tr>";
		var menu = model.getFullMenu();

		console.log(menu);
		console.log("yoo");

		for (var i = 0; i < menu.length; i++) {
			console.log("hej",menu[i].name);
			var bajs = "<tr>"
						+ "<td>" + String(menu[i].name) + "</td>"
						+ "<td class='right-align'>" + String(model.getDishPrice(menu[i].id)) + "</td>"
					+ "</tr>";

			dinnerString = dinnerString + bajs;
		}

		dinnerString = dinnerString + "<tr>"
						+"<td>Pending</td>"
						+"<td class='right-align'>0.00</td>"
					+"</tr>"
					+"<tr class='right-align'>"
						+"<td colspan='2' class='border-top'>"
							+"SEK <span id='totalCost'>" + String(model.getTotalMenuPrice()) + "</span>"
						+"</td>"
					+"</tr>";

		menuContainer.html(dinnerString);


	}

	loadView();

}
 
