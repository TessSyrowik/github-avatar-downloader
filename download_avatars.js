var request = require("request");
var secrets = require("./secrets");

console.log("Welcome to the GitHub Avatar Downloader!");

function getRepoContributors(repoOwner, repoName, cb) {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";

  var options = {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, function(err, res, body) {
    var jsonObj = JSON.parse(body);
    cb(err, jsonObj);
  });
}

// Anonymous function                      ⬇
getRepoContributors("jquery", "jquery", function (err, result) {
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].avatar_url);
  }
});












