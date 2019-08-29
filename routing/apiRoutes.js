// var path = require("path")
var friendList = require("../data/friends.js");

module.exports = function(app){
    app.get("./api/friends.js", function(req,res){
        res.json(friendsList);
    });

    app.post("/api/friends.js", function(req,res){

        var newFriends = req.body.scores;
        var scores1 = [];
        var bestMatch = 0;
        var friendCount = 0;

        for(var i=0; i<friendsList.length; i++){
            var scoresDiff = 0;

            for(var l=0; l<newFriends.length; l++){
                scoresDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(newFriends[j])));
            }

            scores1.push(scoresDiff);
        }

        for(var i = 0; i<scores1.length; i++){
            if(scores1[i] <= scores1[bestMatch]){
                bestMatch = i;
            }
        }

        var beM = friendsList[bestMatch];
        res.json(beM)

        friendsList.push(req.body);

    });
};