import {useRouter} from "next/router"
import Link from "next/link"
import {useEffect, useState} from "react"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import electron from "electron";
const ipcRenderer = electron.ipcRenderer || false;

const BackButton = () =>{
    return (
        <Link href="/home">
            <div className="h-8 w-fit cursor-pointer flex flex-row m-2 transition-all hover:scale-125">
                <img src="./images/back.svg"></img>
            </div>
        </Link>
    )
}

const DownloadButton = ({size, url, setDownloading}) => {
    const download = async () => {
        setDownloading(true)
        let success = await ipcRenderer.invoke("downloadFile", url)
        console.log(success)
        setDownloading(false)
        if(success) {
            toast.success("Download Complete!")
        } else {
            toast.error("Download Failed")
        }
    }

    return (
        <div onClick={download} className="bg-slate-400 w-full text-white text-xl py-2 px-10 rounded-lg shadow-lg mx-auto cursor-pointer transition-all hover:scale-105">
            <p>{size}</p>
        </div>
    )
}

const DownloadingPopup = () => {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-black/20 backdrop-blur-sm flex">
            <div className="bg-white rounded-xl m-auto w-[40vw] p-2 flex flex-col">
                <p className="text-2xl font-bold">Downloading</p>
                <div className="meter red mt-auto">
                    <span style={{width: "100%"}}></span>
                </div>
            </div>
        </div>
    )
}

const TextureDetails = () => {
    const router = useRouter()
    const {texture} = router.query
    const [links, setLinks] = useState([])
    const [imgUrl, setImgUrl] = useState()
    const [downloading, setDownloading] = useState(false)

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

            <div className="h-[50vh] mx-auto mb-12">
                <img src={imgUrl} className="h-full"/>
            </div>

            <div className="grid grid-cols-2 gap-5 w-fit mx-auto my-auto">
                {links.map((item, index) => {
                    return (
                        <DownloadButton size={item.size} url={item.url} setDownloading={setDownloading}></DownloadButton>
                    )
                })}
            </div>
            {downloading && (
                <DownloadingPopup></DownloadingPopup>
            )}
            <ToastContainer/>
        </div>
    )
}

export default TextureDetails