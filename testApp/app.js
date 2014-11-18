var morpheus = require('../lib');


morpheus.node("friend_with",{
  since:Date,
  direction:{
    from:"Person",
    to:"Person"
  }
});

morpheus.node("Person",{
  name:String,
  //Define the relationship schema and the related Node
  friends:Relation("friend_with")
});
