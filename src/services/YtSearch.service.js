require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

const init = () => {
    window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);
    return window.gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => {
            console.log("GAPI client loaded for API");
            return true;
        },
            (err) => { console.error("Error loading GAPI client for API", err); });
}

async function YtSearch(ids) {

    console.log(ids)
    // Make sure the client is loaded before calling this method.

    let initYTClient = await init();

    if (initYTClient) {
        return window.gapi.client.youtube.videos.list({
            "part": "snippet,contentDetails,statistics",
            "id":ids
        })
            .then((response) => {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response.result.items);
                return response.result.items;
            })
            .catch(err => {
                console.error("Execute error", err);
            })
    }


}


export default YtSearch;