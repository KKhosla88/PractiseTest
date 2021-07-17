let express = require("express");

let data = require("./data.json");
let server = express();

server.get("/test",function(req,res){
   res.json(data);
});

server.get("/animal",function(req,res){
    let allAnimal=data.map(function(el){
        return el.animal;
    });

let uniqueAnimal=[];

for (let i = 0; i < allAnimal.length; i++) {
    let animalName = allAnimal[i]["animal"];

    let index = uniqueAnimal.findIndex(function (el) {
      return el.animal == animalName;
    });

    if (index == -1) {
      uniqueAnimal.push(allAnimal[i]);
    }
  }

  res.json(uniqueAnimal);
});

server.listen(4000);    
