# Export and read your spotify account playlist
<h1> Overview </h1>
  <h3> Export your spotify playlist from any acoount! with the API from spotify <br> 
  <ul> 
    <li> https://developer.spotify.com/ </li> 
  </ul> 
</h3> <br>

<h1> Requirement </h1>
  <h3> Required System for export your spotify playlist <br>
<ul>
  <li> <a href="https://nodejs.org"> Node Js </a> </li>
  <li> <a href="https://code.visualstudio.com"> Code Editor (Vs Code) </a> </li>
  <li> <a href="https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701#activetab=pivot:overviewtab"> Terminal </a> </li>
  <li> <a href="https://chrome.com"> Web Browser </a> </li>
  </ul>
</h3> <br>

<h1> Depedencies </h1>
  <h3> Required depedencies to install: => ( npm install "name" --save ) <br>
 <ul>
  <li> Express  </li> 
  <li> spotify-web-api-node </li>
  </ul>
</h3> <br>

<h1> How to run this project? </h1>
  <h3> Here are the steps :) <br>
 <ul>
  <li> GitBash on the folder </li>
  <li> Then type Code . in the GitBash </li>
  <li> Prepare the ID and Token ( avaiable from https://developer.spotify.com/ ), Here are the steps: </li> <br>
 
   <ul>
    <li>  Go to https://developer.spotify.com/ </li>
    <li>  Sign in or Register </li>
    <li>  Go to the "Dashboard" Menu </li>
    <li>  Create an App and click on it, after that edit settings and add redirect URls (http://localhost:8888/callback from index.js)</li> </ul> <br>
  
  <li> Run index.js in VsCode (Bash) or Terminal and wait port listening to (http://localhost:8888/login) </li>
  <li> Run (http://localhost:8888/login) on the web browser and waith the success notification </li>
  <li> Get token AUTH from GitBash or Terminal and replace it on getData.js (const token = "") </li>
  <li> Run getData.js on GitBash or Terminal and get the playlist data </li>
  <li> Playlist data will be saved as .json file </li>
 </ul>
</h3> <br>

<h1> Documentation </h1>
  <ul>
  <li> <h3> <a href = "https://apiary.io/"> Soon! </a> </h3> </li>
  </ul>
  
