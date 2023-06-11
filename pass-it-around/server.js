const express = require("express")

const app = express()

app.get("/", (req, res) => {

    res.send(`<h1>99 bottles of beer on the wall</h1>
    <a href="/98"> take one down, pass it around</a>`)
})


app.get("/:number_of_bottles", (req, res) => {
    let bottles = Number(req.params.number_of_bottles)
    if (bottles > 0) {
        res.send(
            `<h1>${bottles} Bottles of beer on the wall.</h1><
            <a href="${bottles - 1}">take on down, pass it around</a>`)
    }   else {
        res.send(`<h1>No more bottles of the beer on the wall</h1><br>
        <a href="/">StartOver</a>`)
    }
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})