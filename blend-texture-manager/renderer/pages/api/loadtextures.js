import axios from "axios"
import cheerio from "cheerio"

const url = "https://ambientcg.com/list"

async function scrape() {
    /*
    let textures = []

    const {data} = await axios.get(url)
    const $ = cheerio.load(data)
    const results = $(".ItemContainer")
    results.each((idx, el) => {
        let name = $(el).attr("id")
        let url = $(el).find("a").find("img").attr("src")
        textures.push({name, url})
    })
    
    return textures
    */
    let textures = [
        {
            "name": "Planks031A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks031A_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor051",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor051_PREVIEW.jpg"
        },
        {
            "name": "Planks030A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks030A_PREVIEW.jpg"
        },
        {
            "name": "Ground054",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground054_PREVIEW.jpg"
        },
        {
            "name": "Bricks083",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks083_PREVIEW.jpg"
        },
        {
            "name": "Bricks082A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks082A_PREVIEW.jpg"
        },
        {
            "name": "PavingStones119",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones119_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI024",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI024_PREVIEW.jpg"
        },
        {
            "name": "Bricks075A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks075A_PREVIEW.jpg"
        },
        {
            "name": "Wood066",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood066_PREVIEW.jpg"
        },
        {
            "name": "PaintedPlaster017",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PaintedPlaster017_PREVIEW.jpg"
        },
        {
            "name": "Wood051",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood051_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI025",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI025_PREVIEW.jpg"
        },
        {
            "name": "Planks030C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks030C_PREVIEW.jpg"
        },
        {
            "name": "Grass001",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Grass001_PREVIEW.jpg"
        },
        {
            "name": "Planks031C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks031C_PREVIEW.jpg"
        },
        {
            "name": "Wood081",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood081_PREVIEW.jpg"
        },
        {
            "name": "Planks030B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks030B_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor043",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor043_PREVIEW.jpg"
        },
        {
            "name": "Wood049",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood049_PREVIEW.jpg"
        },
        {
            "name": "Grass004",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Grass004_PREVIEW.jpg"
        },
        {
            "name": "Ground037",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground037_PREVIEW.jpg"
        },
        {
            "name": "Planks031B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks031B_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI023",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI023_PREVIEW.jpg"
        },
        {
            "name": "Leather034C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather034C_PREVIEW.jpg"
        },
        {
            "name": "Concrete034",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Concrete034_PREVIEW.jpg"
        },
        {
            "name": "Bricks082C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks082C_PREVIEW.jpg"
        },
        {
            "name": "Fabric061",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric061_PREVIEW.jpg"
        },
        {
            "name": "Wood067",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood067_PREVIEW.jpg"
        },
        {
            "name": "Marble016",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble016_PREVIEW.jpg"
        },
        {
            "name": "Planks029L",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks029L_PREVIEW.jpg"
        },
        {
            "name": "IndoorHDRI003",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/IndoorHDRI003_PREVIEW.jpg"
        },
        {
            "name": "Metal032",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal032_PREVIEW.jpg"
        },
        {
            "name": "Tiles107",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles107_PREVIEW.jpg"
        },
        {
            "name": "Bricks074",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks074_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor057",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor057_PREVIEW.jpg"
        },
        {
            "name": "Leather035D",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather035D_PREVIEW.jpg"
        },
        {
            "name": "Wood060",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood060_PREVIEW.jpg"
        },
        {
            "name": "Wood058",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood058_PREVIEW.jpg"
        },
        {
            "name": "Metal038",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal038_PREVIEW.jpg"
        },
        {
            "name": "Marble012",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble012_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI040",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI040_PREVIEW.jpg"
        },
        {
            "name": "PavingStones118",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones118_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor041",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor041_PREVIEW.jpg"
        },
        {
            "name": "Ground048",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground048_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI036",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI036_PREVIEW.jpg"
        },
        {
            "name": "Marble006",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble006_PREVIEW.jpg"
        },
        {
            "name": "Marble021",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble021_PREVIEW.jpg"
        },
        {
            "name": "Bricks078",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks078_PREVIEW.jpg"
        },
        {
            "name": "Bricks059",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks059_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor052",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor052_PREVIEW.jpg"
        },
        {
            "name": "Gravel033",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Gravel033_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI034",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI034_PREVIEW.jpg"
        },
        {
            "name": "Wood048",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood048_PREVIEW.jpg"
        },
        {
            "name": "Leather034D",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather034D_PREVIEW.jpg"
        },
        {
            "name": "Fabric066",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric066_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor040",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor040_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI028",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI028_PREVIEW.jpg"
        },
        {
            "name": "Bricks079",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks079_PREVIEW.jpg"
        },
        {
            "name": "PavingStones111",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones111_PREVIEW.jpg"
        },
        {
            "name": "Planks023A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks023A_PREVIEW.jpg"
        },
        {
            "name": "PavingStones114",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones114_PREVIEW.jpg"
        },
        {
            "name": "Plaster001",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Plaster001_PREVIEW.jpg"
        },
        {
            "name": "Planks029S",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks029S_PREVIEW.jpg"
        },
        {
            "name": "Wood062",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood062_PREVIEW.jpg"
        },
        {
            "name": "Bricks060",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks060_PREVIEW.jpg"
        },
        {
            "name": "Concrete030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Concrete030_PREVIEW.jpg"
        },
        {
            "name": "Concrete031",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Concrete031_PREVIEW.jpg"
        },
        {
            "name": "Metal034",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal034_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI038",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI038_PREVIEW.jpg"
        },
        {
            "name": "Fabric062",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric062_PREVIEW.jpg"
        },
        {
            "name": "Rock035",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Rock035_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI019",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI019_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor044",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor044_PREVIEW.jpg"
        },
        {
            "name": "Metal035",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal035_PREVIEW.jpg"
        },
        {
            "name": "Marble020",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble020_PREVIEW.jpg"
        },
        {
            "name": "Bricks077",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks077_PREVIEW.jpg"
        },
        {
            "name": "Concrete036",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Concrete036_PREVIEW.jpg"
        },
        {
            "name": "IndoorHDRI001",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/IndoorHDRI001_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI016",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI016_PREVIEW.jpg"
        },
        {
            "name": "Plastic010",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Plastic010_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI032",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI032_PREVIEW.jpg"
        },
        {
            "name": "Road007",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Road007_PREVIEW.jpg"
        },
        {
            "name": "Tiles093",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles093_PREVIEW.jpg"
        },
        {
            "name": "Leather036D",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather036D_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor056",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor056_PREVIEW.jpg"
        },
        {
            "name": "Bricks076A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks076A_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI026",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI026_PREVIEW.jpg"
        },
        {
            "name": "Ground052",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground052_PREVIEW.jpg"
        },
        {
            "name": "Wood068",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood068_PREVIEW.jpg"
        },
        {
            "name": "Fence007A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fence007A_PREVIEW.jpg"
        },
        {
            "name": "Wood050",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood050_PREVIEW.jpg"
        },
        {
            "name": "Bricks080A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks080A_PREVIEW.jpg"
        },
        {
            "name": "Bricks082B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks082B_PREVIEW.jpg"
        },
        {
            "name": "Moss002",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Moss002_PREVIEW.jpg"
        },
        {
            "name": "PavingStones070",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones070_PREVIEW.jpg"
        },
        {
            "name": "Fabric036",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric036_PREVIEW.jpg"
        },
        {
            "name": "Wood047",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood047_PREVIEW.jpg"
        },
        {
            "name": "Bricks075B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks075B_PREVIEW.jpg"
        },
        {
            "name": "Wood026",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood026_PREVIEW.jpg"
        },
        {
            "name": "IndoorHDRI004",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/IndoorHDRI004_PREVIEW.jpg"
        },
        {
            "name": "Leather033A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather033A_PREVIEW.jpg"
        },
        {
            "name": "Bricks066",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks066_PREVIEW.jpg"
        },
        {
            "name": "Porcelain001",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Porcelain001_PREVIEW.jpg"
        },
        {
            "name": "Leather035C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather035C_PREVIEW.jpg"
        },
        {
            "name": "Wood061",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood061_PREVIEW.jpg"
        },
        {
            "name": "Gravel032",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Gravel032_PREVIEW.jpg"
        },
        {
            "name": "Terrain004",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Terrain004_PREVIEW.jpg"
        },
        {
            "name": "Fabric063",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric063_PREVIEW.jpg"
        },
        {
            "name": "Wood027",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood027_PREVIEW.jpg"
        },
        {
            "name": "Metal036",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal036_PREVIEW.jpg"
        },
        {
            "name": "PlanksSubstance003",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PlanksSubstance003_PREVIEW.jpg"
        },
        {
            "name": "PavingStones115B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones115B_PREVIEW.jpg"
        },
        {
            "name": "Rock020",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Rock020_PREVIEW.jpg"
        },
        {
            "name": "Plastic006",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Plastic006_PREVIEW.jpg"
        },
        {
            "name": "Wood052",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood052_PREVIEW.jpg"
        },
        {
            "name": "Fabric030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric030_PREVIEW.jpg"
        },
        {
            "name": "Bricks080C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks080C_PREVIEW.jpg"
        },
        {
            "name": "PavingStones117",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones117_PREVIEW.jpg"
        },
        {
            "name": "Bricks080B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks080B_PREVIEW.jpg"
        },
        {
            "name": "Leather034B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather034B_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor046",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor046_PREVIEW.jpg"
        },
        {
            "name": "Wood059",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood059_PREVIEW.jpg"
        },
        {
            "name": "Rock048",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Rock048_PREVIEW.jpg"
        },
        {
            "name": "Ground049A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground049A_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI015",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI015_PREVIEW.jpg"
        },
        {
            "name": "Tiles078",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles078_PREVIEW.jpg"
        },
        {
            "name": "MetalPlates006",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/MetalPlates006_PREVIEW.jpg"
        },
        {
            "name": "MetalPlates013",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/MetalPlates013_PREVIEW.jpg"
        },
        {
            "name": "Tiles074",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles074_PREVIEW.jpg"
        },
        {
            "name": "Fabric060",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric060_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor054",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor054_PREVIEW.jpg"
        },
        {
            "name": "Wood076",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood076_PREVIEW.jpg"
        },
        {
            "name": "Leather033C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather033C_PREVIEW.jpg"
        },
        {
            "name": "Marble014",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble014_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI026",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI026_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI035",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI035_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI024",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI024_PREVIEW.jpg"
        },
        {
            "name": "Gravel023",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Gravel023_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI020",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI020_PREVIEW.jpg"
        },
        {
            "name": "Rock030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Rock030_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI001",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI001_PREVIEW.jpg"
        },
        {
            "name": "PavingStones109",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones109_PREVIEW.jpg"
        },
        {
            "name": "Marble019",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble019_PREVIEW.jpg"
        },
        {
            "name": "Grass002",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Grass002_PREVIEW.jpg"
        },
        {
            "name": "Facade018A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Facade018A_PREVIEW.jpg"
        },
        {
            "name": "Fabric048",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric048_PREVIEW.jpg"
        },
        {
            "name": "Tiles098",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles098_PREVIEW.jpg"
        },
        {
            "name": "Wood077",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood077_PREVIEW.jpg"
        },
        {
            "name": "Metal007",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal007_PREVIEW.jpg"
        },
        {
            "name": "Bricks081A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks081A_PREVIEW.jpg"
        },
        {
            "name": "Fabric045",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fabric045_PREVIEW.jpg"
        },
        {
            "name": "Rock041",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Rock041_PREVIEW.jpg"
        },
        {
            "name": "SkyOnlyHDRI020",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/SkyOnlyHDRI020_PREVIEW.jpg"
        },
        {
            "name": "Marble023",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Marble023_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor053",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor053_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor039",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor039_PREVIEW.jpg"
        },
        {
            "name": "PavingStones112",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones112_PREVIEW.jpg"
        },
        {
            "name": "Bricks076C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks076C_PREVIEW.jpg"
        },
        {
            "name": "Bricks081C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks081C_PREVIEW.jpg"
        },
        {
            "name": "Leather030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Leather030_PREVIEW.jpg"
        },
        {
            "name": "Planks023B",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Planks023B_PREVIEW.jpg"
        },
        {
            "name": "PavingStones116",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/PavingStones116_PREVIEW.jpg"
        },
        {
            "name": "Metal030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Metal030_PREVIEW.jpg"
        },
        {
            "name": "Bricks051",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks051_PREVIEW.jpg"
        },
        {
            "name": "Tiles105",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles105_PREVIEW.jpg"
        },
        {
            "name": "Plaster002",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Plaster002_PREVIEW.jpg"
        },
        {
            "name": "Ground049C",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Ground049C_PREVIEW.jpg"
        },
        {
            "name": "Wood073",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood073_PREVIEW.jpg"
        },
        {
            "name": "Concrete032",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Concrete032_PREVIEW.jpg"
        },
        {
            "name": "WoodFloor034",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/WoodFloor034_PREVIEW.jpg"
        },
        {
            "name": "Wood078",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood078_PREVIEW.jpg"
        },
        {
            "name": "RoofingTiles006",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/RoofingTiles006_PREVIEW.jpg"
        },
        {
            "name": "Asphalt020L",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Asphalt020L_PREVIEW.jpg"
        },
        {
            "name": "Tiles086",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Tiles086_PREVIEW.jpg"
        },
        {
            "name": "MetalPlates014",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/MetalPlates014_PREVIEW.jpg"
        },
        {
            "name": "Wood030",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Wood030_PREVIEW.jpg"
        },
        {
            "name": "Bricks054",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Bricks054_PREVIEW.jpg"
        },
        {
            "name": "Fence008A",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/Fence008A_PREVIEW.jpg"
        },
        {
            "name": "OutdoorHDRI015",
            "url": "https://cdn3.struffelproductions.com/file/ambientCG/media/sphere/256-JPG-FFFFFF/OutdoorHDRI015_PREVIEW.jpg"
        }
    ]

    textures.sort((a,b) => {
        var textA = a.name.toUpperCase()
        var textB = b.name.toUpperCase()
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
    })

    textures.forEach(texture => {
        texture.name = texture.name.replace(/([A-Z])/g, ' $1').trim()
        texture.name = texture.name.replace(/([^0-9])([0-9])/g, '$1 $2')
    })
    
    return textures
}

export default async function handler(req, res) {
  try {
    let data = await scrape()
    res.json({ success: true, data});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
}