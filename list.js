window.setTimeout(function() {
  var todos = ["Buy New Turtle"];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    //handle input
    if (input === "list") {
      console.log(todos);
    } else if (input === "new") {
      //ask for new todo
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
      console.log(todos);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
  }
  console.log("OK, YOU QUIT THE APP");
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // put all of your JS code from the lecture here
  }, 500);



 