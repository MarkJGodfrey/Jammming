const clientId = '79c68934d5bc447686729b87e0c3acc1'; // Insert client ID here.
let accessToken;

const Utilities = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      setTimeout(() => accessToken = '', expiresIn * 1000);
      return accessToken;
    } else {
    const accessUrl = `https://accounts.spotify.com/authorize?scope=playlist-modify-public&response_type=token&redirect_uri=http://localhost:3000/&client_id=${clientId}`;
    location = accessUrl;
    }
  },
// https://accounts.spotify.com/authorize?scope=playlist-modify-public&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&client_id=&flow_ctx=a81a0567-2b04-4d66-853a-faf1ff3cf3aa%3A1706386355
  search(term) {
    // const accessToken = Utilities.getAccessToken();
  //   response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`
  //     }
  //   });
  //   const jsonResponse = await response.json();
  //   if (!jsonResponse.tracks) {
  //       return [];
  //   }
  //   return jsonResponse.tracks.items.map(track => ({
  //   id: track.id,
  //   name: track.name,
  //   artist: track.artists[0].name,
  //   album: track.album.name,
  //   uri: track.uri
  //   }));
  // },
  return [{
    id: "1",
    name: "Yellow Smoke",
    artist: "Bobby Steele",
    album: "Nothing in the way",
    uri: "http//hwfbwfbak"
  },{
    id: "2",
    name: "Teenage Soldier",
    artist: "Jonny Boy",
    album: "Death of the Paragon",
    uri: "http//hwfbrhaefkna"
  },{
    id: "3",
    name: "Letters Never Sent",
    artist: "Wayne Gunn",
    album: "Twilight Swamp",
    uri: "http//hyukgkygurae"
  }];
}

};

export default Utilities;
