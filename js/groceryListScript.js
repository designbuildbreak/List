$(document).ready(function(){
	
	app = new GroceryListScript();
	app.start();
	
	function GroceryListScript()
	{
		this.start = function()
		{
			//The user enters stuff into the input field.
			$("#grocery-item-input").keypress(function(e){
				if(e.which==13)//This is the enter key
				{
					//window.alert("1");
					addGroceryItem();
					return false; //return false so the .keypress function doesn't do any other stuff.
				}
			});
		
			//When the user presses "enter" to add a grocery item to the list, this function is called
			function addGroceryItem()
			{
				//window.alert("2");
				var groceryItem = $("#grocery-item-input").val();
				if(groceryItem)
				{
					addGroceryItemLine(groceryItem);
					$("#grocery-item-input").val("").focus;//Resets the text field
				}
			};
			
			//This is a sub-function to addGroceryItem(). It adds the grocery item to the list, adds the buttons, and has the button functionality built into it.
			function addGroceryItemLine(groceryItem)
			{	
				//window.alert("3")
				var deleteButton = $("<button id='delete-button' class='btn btn-danger' style='margin: .5em;'>Delete</button>");
				var gotItButton = $("<button class='btn btn-primary' style='margin: .5em;'>Got It!</button>");
				var buttons = deleteButton.add(gotItButton);
				
				var lineItem = $("<div id=" + groceryItem + "></div>"); //HOLY SHIT THIS WORKS!!!
				lineItem = lineItem.append(buttons);
				lineItem = lineItem.append(groceryItem);				
				lineItem = lineItem.append("<br>");
				$("#grocery-item").append(lineItem);
				//lineItem = $("<span></span>");
				
				//TODO
				$("button.btn-danger").click(function(){
					$(lineItem).remove();
				});
			};
			
/* 			$("button").click(function()
			{
				window.alert("got here");
				$("#delete-button").remove();
			}); */
			
		};		
	};	
});