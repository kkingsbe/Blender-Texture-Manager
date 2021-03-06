import axios from "axios"
import cheerio from "cheerio"

async function scrape(url) {
    let result = {}

    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const images = $(".OnlyShowLight")
    var mainImg
    images.each((ind, el) => {
        if($(el).attr("width") == "1024") mainImg = $(el).attr("src")
    })
    const downloadButtons = $(".DownloadButton")
    result.links = []
    downloadButtons.each((ind, el) => {
        if(el.attribs.title.includes(".png")) {
            let size = $(el).find(".SingleDownloadAttribute").html()
            result.links.push({
                url: el.attribs.href,
                size
            })
        }
    })
    result.image = mainImg

    return result
}

export default async function handler(req, res) {
    if(req.method == "POST") {
        try {
            let {name} = req.body
            let data = await scrape(`https://ambientcg.com/view?id=${name.replace(" ", "")}`)
            //let data = {}
            res.json({ success: true, data});
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, error });
        }
    }
}