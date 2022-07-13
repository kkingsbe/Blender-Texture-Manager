import Link from "next/link"

const TextureCard = ({data}) => {
    return (
      <Link href={data.name}>
      <div className="w-fit shadow-lg rounded-lg p-5 flex flex-col gap-10 cursor-pointer bg-white border border-slate-300 hover:scale-105 hover:shadow-xl transition-all">
        <img src={data.url} className="w-52"/>
        <p className="text-xl font-[Ubuntu] font-semibold text-center">{data.name}</p>
      </div>
      </Link>
    )
}

export default TextureCard