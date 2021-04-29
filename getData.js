const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQC_PIqob-v-qmGUI2jEqMjfPVYodffSlXtKnoKl8fwdeYh9WeUl4ziR4cH82LVMfjbunDW8bD2n08nKTcqWRYM9MMnzeKbNk2ktZzDmrsmKChjPnwUTrBDGQ1JuLtHSmbXpxWOTm2DjuQ0LxAEGbqFaYBBAGUQ2BTFJtVdpUgPb9aFtMybi3fJLELN1ZWTYBL05CPzD-0ptJYd9tp0-9oYRlNaI7lX1NbnO3a3rzJcgndH0di1sCWKBpL78RIrNU_vOtdezFY-xYt6Wqgp1cBaNtm8wpwyoXGmYdX1J4aHeUmaV";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    // console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("================YOUR--SPOTIFY--PLAYLIST================\n")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(" Your Playlist Name: " + playlist.name + "\n" + " Your Playlist ID: " + playlist.id + "\n")
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
  let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(" Title Track: " + track.name + "\t" + " Artist: " +  track.artists[0].name + "\n")
  }
  
  console.log("================YOUR--SPOTIFY--PLAYLIST================\n")
  return tracks;
}

getMyData();