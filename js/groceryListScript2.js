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
		var group = deleteButton;
		group = group.add(gotItButton);
		group = group.append(item);
		
		//here - create a div that holds everything, and then posts that div as a list item - and then just follow the other guys' code.
		
		//$("#grocery-list").append("<p class='item'>" + item + "</p>");
		$("#grocery-list").append(group);
		//$("#grocery-list").append(gotItButton);
		//$("#grocery-list").append("<p class='item'>" + item + "</p>");
		
		$("#grocery-item-input").val("").focus;//Resets the text field
	};

	//window.alert("1");
    $(document).on("click", ".item", function () {
        $(this).remove();
    });
});