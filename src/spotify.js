// export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
// const clientId = "dd52d9aae09b41b1902e7cb13fe1a3cb";

// const scopes = [
//     "user-read-currently-playing",
//     "user-read-recently played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state",
// ]

// export const loginUrl = `${authEndpoint}
//     ?client_id=${clientId}
//     &redirect_uri=${redirectUri}
//     &scope=${scopes.join("%20")}
//     &response_type=token
//     &show_dialog=true`;




// export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
// const clientId = "dd52d9aae09b41b1902e7cb13fe1a3cb";

// const scopes = [
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state",
// ];

// export const getTokenFromUrl = () => {
//     return window.location.hash
// }

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;



// export const authEndpoint = "https://accounts.spotify.com/authorize";
// // const redirectUri = "http://localhost:3000/";
// const redirectUri = "https://spotify-clone-f9be4.web.app/";
// const clientId = "dd52d9aae09b41b1902e7cb13fe1a3cb";

// const scopes = [
//     "user-read-currently-playing",
//     "user-read-recently-played",
//     "user-read-playback-state",
//     "user-top-read",
//     "user-modify-playback-state",
// ];

// export const getTokenFromUrl = () => {
//     return window.location.hash.substring(1).split("&").reduce((initial, item) =>{
//         var parts = item.split("=");
//         initial[parts[0]] = decodeURIComponent(parts[1]);

//         return initial;
//     }, {} );
// }

// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


export const authEndpoint = "https://accounts.spotify.com/authorize";
// const redirectUri = "http://localhost:3000/";
const redirectUri = "https://spotify-clone-7276b.web.app/";
const clientId = "dd52d9aae09b41b1902e7cb13fe1a3cb";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split("&").reduce((initial, item) =>{
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {} );
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;