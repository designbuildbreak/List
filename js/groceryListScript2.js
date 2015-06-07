$(document).ready(function() {
    
	//The user enters stuff into the input field and presses "enter"
	$("#grocery-item-input").keypress(function(e){
		if(e.which==13)//This is the enter key
		{
			//window.alert("1");
			addGroceryItem();
			return false; //return false so the .keypress function doesn't do any other stuff.
		}
	});
	
	//Or the user can press the "Add to List" Button
	$("#add-to-list-button").click(function(e){
		e.preventDefault();
		if($("#grocery-item-input").val() != "")
		{
			addGroceryItem();
		}
		
	});	
	
	function addGroceryItem(){
		var item = $("#grocery-item-input").val();
		var deleteButton = $("<button class='btn btn-danger' style='margin: .5em;'>Delete</button>");
		var gotItButton = $("<button class='btn btn-primary' style='margin: .5em;'>Got It!</button>");
		var span = $("<span class='item'></span>");
		span.append(deleteButton);
		span.append(gotItButton);
		span.append(item);
		span.append("<br>");
		$("#grocery-list").append(span);
		$("#grocery-item-input").val("").focus;//Resets the text field
	};

	$(document).on("click", ".btn-danger", function () {
		$(this).closest('span').remove(); //Looks for the closest SPAN element (the one that encapsulates the item) and deletes it. Awesome.
	});
});