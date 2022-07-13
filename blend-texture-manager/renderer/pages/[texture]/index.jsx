import {useRouter} from "next/router"
import Link from "next/link"
import {useEffect, useState} from "react"
import axios from "axios"

const BackButton = () =>{
    return (
        <Link href="/home">
            <div className="h-8 w-fit cursor-pointer flex flex-row m-2 transition-all hover:scale-125">
                <img src="./images/back.svg"></img>
            </div>
        </Link>
    )
}
const TextureDetails = () => {
    const router = useRouter()
    const {texture} = router.query
    const [links, setLinks] = useState([])
    const [imgUrl, setImgUrl] = useState()

    const getData = async () => {
        let {data} = await axios.post("api/texturedetails", {name: texture})
        setLinks(data.data.links)
        setImgUrl(data.data.image)
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <BackButton></BackButton>
                <p className="my-auto mr-2 text-3xl font-semibold">{texture}</p>
            </div>

            <div className="h-[30vh] mx-auto mb-12">
                <img src={imgUrl} className="h-full"/>
            </div>

            <div className="grid grid-cols-2 gap-5 w-fit mx-auto my-auto">
                {links.map((item, index) => {
                    return (
                        <div className="bg-slate-400 w-full text-white text-xl py-2 px-10 rounded-lg shadow-lg mx-auto">
                            <p>{item.size}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default TextureDetails