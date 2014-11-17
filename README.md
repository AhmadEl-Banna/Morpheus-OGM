Morpheus-OGM
============

Object Graph Mapping For Neo4j 

Objectives
the goal of this framework is to provide Object Graph Mapping for Neo4j graph database.

what it should look like:

the main idea is an api to provide schema and relationships schema ,and a chained functions to query and save data.

Sample:
``` javascript
var morpheus = require("morpheus-ogm");

morpheus.Node("friend_with",{
  since:Date,
  direction:{
   from:"Person",
   to:"Person"
  }
});

morpheus.Node("Person",{
  name:String,
  //Define the relationship schema and the related Node
  friends:Relation("friend_with")
});

//returns Queryable start than can be chained later 
//"MATCH (n:`Person`) RETURN n"
var people = morpheus.Cypher("Person");
var friends = morpheus.Cypher("friend_with")

people.limit(25);

people.where("name").isLike(search)
.fetchRelation("friends",
friends.where("since").isBefore(someDate).isAfter(anotherDate))
.run(function(err,data){
  
});
```
something like that 
please support me with feed back
