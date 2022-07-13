import TextureCard from "./TextureCard"

const TextureList = ({textures}) => {
    return (
        <div className="mx-auto grid grid-cols-4 gap-10 mb-20">
        {textures.map((item, index) => {
            return (
                <TextureCard data={item} key={index}></TextureCard>
            )
        })}
        </div>
    )
}

export default TextureList