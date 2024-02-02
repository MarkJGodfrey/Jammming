const clientId = '79c68934d5bc447686729b87e0c3acc1';
let accessToken='';

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
      const accessUrl = `https://accounts.spotify.com/authorize?scope=playlist-modify-public&response_type=token&redirect_uri=http://localhost:3000&client_id=${clientId}`;
      location = accessUrl;
    }
  },
 async search(term) {
    const accessToken = Utilities.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
        return [];
    }
    return jsonResponse.tracks.items.map(track => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri
    }));
  },
  savePlaylist(name, tracks) {
    if (!(name && tracks.length)) {
      return;
    }
    const trackUris = tracks.map((track)=>track.uri);
    const accessToken = Utilities.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    let userId;

    return fetch('https://api.spotify.com/v1/me', {headers: headers}
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackUris})
        }).then(response1=>alert(response1));
      });
    });
  }
};

export default Utilities;