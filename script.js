var submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission (optional)

    // Perform your desired action here
    console.log("Button clicked!");
});
console.log("Hello!")

var submitBtn = document.getElementById("submitBtn")
var gifDiv = document.getElementById("gifDiv")
var searchForm = document.getElementById("form")


submitBtn.addEventListener("click", async (event) => {
    event.preventDefault()

    try {
        const apiKey = "Hcncqhk28zhby6Khi8w9tsyLpYKYKYun"
        const searchTerm = "hello"
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchForm.value)}`

        const response = await fetch(url)
        const data = await response.json()

        const images = data.data
        
        images.forEach(image => {
            const img = document.createElement("img")
            img.src = image.images.original.url
            gifDiv.appendChild(img)
        })

        // console.log(data.data[0].images.original.url)

        // const img = document.createElement("img")
        // img.src = data.data[0].images.original.url
        // gifDiv.appendChild(img)

        console.log(data)
    } catch (error) {
        console.log(error)
    }
    console.log("Button clicked")
})

const handleFormSubmit = (e) => {
    e.preventDefault

}