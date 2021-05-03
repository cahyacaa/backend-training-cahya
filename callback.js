function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = 'cahya';
    callback(name);
  }
  
  processUserInput(greeting);