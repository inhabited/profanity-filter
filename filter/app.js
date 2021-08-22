const hash = window.location.hash
const splitOne = hash.split("=")[1]
const spotifyToken = splitOne.split("&")[0]
console.log(spotifyToken);

fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${spotifyToken}`,
        "Content-Type": "application/json"
    }
})
    .then(function (response) {
        console.log(response);
        => response.json())
    .then(data => console.log(data)).then(limit = data.limit);



/*fetch(`https://api.spotify.com/v1/playlists/6ZafhngGkEnEsbq3Ugtmsv/tracks?limit=100`, {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${spotifyToken}`,
    "Content-Type": "application/json"
  }
}).then(response => response.json()).then(data => console.log(data));*/