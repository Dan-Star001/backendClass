const express = require('express');
const app = express()
const port = 4921;
const worldCup = [
    {
        Country: "Nigeria",
        player: "Victor Oshimen",
        Coach:" Finidi George"
    },
    {
        Country:"England",
        player:"Harry Kane",
        Coach:" Gareth Southgate"
    },
    {
        Country:"Brazil",
        player:"Neymar",
        Coach:" Carlo Ancelotti"
    },
    {
        Country:"France",
        player:"Kylian Mbapee",
        Coach:" Didier Deschamps"
    },
    {
        Country:"Argentina",
        player:"Lionel Messi",
        coach:"Lionel Scaloni"
    },
    {
        Country:"Portugal",
        player:"Cristiano Ronaldo",
        coach:"Roberto Martinez"
    },
    {
        Country:"Spain",
        player:"Pedri",
        coach:"Luis de la Fuente"
    },
    {
        Country:"Germany",
        player:"Toni Kroos",
        coach:"Julian Nagelsmann"
    },
    {
        Country:"Italy",
        player:"Nicolò Barella",
        coach:"Luciano Spalletti"
    },
    {
        Country:"Netherlands",
        player:"Virgil van Dijk",
        coach:"Ronald Koeman"
    }
]  


app.get("/", (req, res) => {
    res.send('This is backend class')
})

app.get("/worldcups", (req, res) => {
    res.send(worldCup)
})

app.get("/hurray", (req, res) => {
    res.send("I built my first api")
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})