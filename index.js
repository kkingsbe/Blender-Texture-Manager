const axios = require("axios")
const cheerio = require("cheerio")

const url = "https://ambientcg.com/list"

async function scrape() {
    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const results = $(".ItemContainer")
    results.each((idx, el) => {
        let name = $(el).attr("id")
        let image = $(el).find("a").find("img").attr("src")
        console.log(name)
        console.log(image)
        console.log("----------------------")
    })
}

scrape()