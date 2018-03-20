var request = require("request");

console.log("Welcome to the GitHub Avatar Downloader!");

function getRepoContributors(repoOwner, repoName, callback) {
  // ...
}
// changed cb to callback
// this will handle asynch results returned from getRepoContributors

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

getRepoContributors();