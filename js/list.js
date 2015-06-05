$(document).ready(function(){
	
	app = new TaskAtHandApp();
	app.start();
	
	function TaskAtHandApp()
	{
		var version = "1.0";
		
		this.start = function()
		{
			$("#new-task-name").keypress(function(e){
				if(e.which==13)//This is the enter key
				{
					addTask();
					return false; //return false so the .keypress function doesn't do any other stuff.
				}
			})
			.focus();
			
			$("#app>header").append(" " + version);
			setStatus("ready");
		
			function addTask()
			{
				var taskName = $("#new-task-name").val();
				if(taskName)
				{
					addTaskLine(taskName);
					$("#new-task-name").val("").focus;//Resets the text field
				}
			};
			
			function setStatus(message)
			{
				$("#app>footer").text(message);
			};
			
			function addTaskLine(taskName)
			{	
				$("#task-name-in-button-group").empty();
				var $taskLine;
				$taskLine = $("#button-group").clone().append($("#task-name-in-button-group").append(taskName));
				$taskLine.appendTo("#task-list");
				//$("#task-name-in-button-group").append(taskName);
				
				//$("#task-name-in-button-group").append(taskName);
				
				
				$("button.delete").click(function(){
					$taskLine.remove();
				})
				
				$("button.move-up").click(function(){
					$taskLine.insertBefore($taskLine.prev());
				})
				
				$("button.delete").click(function(){
					$taskLine.insertAfter($taskLine.next());
				})
	
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