console.log("Let's get this party started!");

// select values using jquery
const $searchbar = $("#search")
const $gifDiv = $("#gifDiv")

// create async function that adds gif
async function getGif(res){
    // get response data length
    let numResults = res.data.length;
    // if response data not empty:
    if (numResults) {
    // select random gif out of response.data
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "gifColumn" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "createdGif"
    });
    $newCol.append($newGif);
    $gifDiv.append($newCol);
    }

}

// jquery eventlistener on form
$("form").on("submit", async function(e) {
    e.preventDefault();
    console.log("form submitted")

    // select searchbar value
    let searchQ = $searchbar.val();
    // then reset
    $searchbar.val("");
    console.log("SEARCHQ", searchQ)

    // use axios to login and get retrive response
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        // set params
        params: {
          q: searchQ,
          api_key: "E8oGIx9SX977sXFVbL7V4Cfy2vLSbmVz"
        }});
    // call function on response data
    getGif(res.data)
    console.log("function called")
});
// eventlistener to button when clicked, empty content div
$("#btn-remove").on("click", function(){
    $gifDiv.empty()
})
