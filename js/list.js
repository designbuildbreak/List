$(document).ready(function(){
	
	app = new GroceryListApp();
	app.start();
	
	function GroceryListApp()
	{
		this.start = function()
		{
			//The user enters stuff into the input field.
			$("#grocery-item-input").keypress(function(e){
				if(e.which==13)//This is the enter key
				{
					window.alert("1");
					addGroceryItem();
					return false; //return false so the .keypress function doesn't do any other stuff.
				}
			});
		
			//When the user presses "enter" to add a grocery item to the list, this function is called
			function addGroceryItem()
			{
				window.alert("2");
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
				window.alert("3")
				var groceryItemLine = $("<p>Test</p>");
				$("#grocery-item").append(groceryItemLine);
				
				/* $("#task-name-in-button-group").empty();
				var $taskLine;
				$taskLine = $("#button-group").clone().append($("#task-name-in-button-group").append(taskName));
				$taskLine.appendTo("#task-list"); */
				//$("#task-name-in-button-group").append(taskName);
				
				//$("#task-name-in-button-group").append(taskName);
				
				
				/* $("button.delete").click(function(){
					$taskLine.remove();
				})
				
				$("button.move-up").click(function(){
					$taskLine.insertBefore($taskLine.prev());
				})
				
				$("button.delete").click(function(){
					$taskLine.insertAfter($taskLine.next());
				}) */
	
			};
			
			function deleteTaskLine(){
				
			}
			
			//function deleteTaskLine()
			
			/* function addTaskElement(taskName)
			{
				var $task = $("<li></li>");
				var $delete = $("<button class='delete' style='display:inline;'>Delete</button>");
				var $moveUp = $("<button class='move-up' style='display:inline;'>Move Up</button>");
				var $moveDown = $("<button class='move-down' style='display:inline;'>Move Down</button>");
				$("#task-list").append(($task.text(taskName + " ")).append($delete).append($moveUp).append($moveDown));
				
				$delete.click(function()
				{
					$task.remove();
				});
				$moveUp.click(function()
				{
					$task.insertBefore($task.prev());
				});
				$moveDown.click(function()
				{
					$task.insertAfter($task.next());
				});
				
			}; */
		};
		
		
	};
	
});