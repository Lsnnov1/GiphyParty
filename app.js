console.log("Let's get this party started!");
const $searchbar = $("#search")
const $gifDiv = $("#gifDiv")

async function getGif(res){
    let numResults = res.data.length;
    if (numResults) {
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


$("form").on("submit", async function(e) {
    e.preventDefault();
    console.log("form submitted")
    let searchQ = $searchbar.val();
    $searchbar.val("");
    console.log("SEARCHQ", searchQ)

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchQ,
          api_key: "E8oGIx9SX977sXFVbL7V4Cfy2vLSbmVz"
        }});

    getGif(res.data)
    console.log("function called")
});

$("#btn-remove").on("click", function(){
    $gifDiv.empty()
})
