Bomb = require("../bomb").Bomb;

bomb = new Bomb(1000);
bomb.on("boom", function() {
  console.log("the bomb exploded");
});

