var prompt = require("prompt");

prompt.start()

var life = {
  hungry: 'yes',
  keepPrompting: function() {
    var that = this;
    prompt.get(["hungry"], function(err, result) {
      this.hungry = result.hungry;

      if(this.hungry === "yes") {
        console.log("Here are some pizza burgers");
        that.keepPrompting();
      } else {
        console.log("You're full");
      }
    });
  }
}

life.keepPrompting();

//its bassically a copy of the ‘this’ reference when ‘this’ refers to the ‘life’ object. the variable is available from inside the prompt function because its higher up in scope