const spotifyToken = window.location.hash.split("=")[1].split("&")[0]

fetch("https://api.spotify.com/v1/me/playlists", {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${spotifyToken}`,
    "Content-Type": "application/json"
  }
}).then(response => response.json()).then(data => console.log(data));