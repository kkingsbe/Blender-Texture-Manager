import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TextureList from '../components/TextureList';
import axios from "axios"
import {useEffect, useState} from "react"

const TextureCard = ({data}) => {
  return (
    <div className="w-fit shadow-lg rounded-lg p-5 flex flex-col gap-10 cursor-pointer bg-white hover:scale-105 hover:shadow-xl transition-all">
      <img src={data.url} className="w-52"/>
      <p className="text-xl font-[Ubuntu] font-semibold text-center">{data.name}</p>
    </div>
  )
}

const Searchbar = ({textures, setFilteredTextures}) => {
  const [filter, setFilter] = useState("")

  const applyFilter = () => {
      let temp = []
      textures.forEach(texture => {
          if(texture.name.toLowerCase().includes(filter.toLowerCase())) temp.push(texture)
      })
      setFilteredTextures(temp)
  }

  useEffect(() => {
      applyFilter()
  }, [filter])

  return (
      <div className="flex flex-col gap-2">
          <input style={{background: `white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center`}} onChange={(e)=>{setFilter(e.target.value)}} className="shadow-md bg-white border border-teal-200 text-slate-900 rounded pl-10 py-1 w-full outline-teal-400"></input>
      </div>
  )
}

function Home() {
  const [textures, setTextures] = useState([])
  const [filteredTextures, setFilteredTextures] = useState([])

  const getTextures = async () => {
    let {data} = await axios.get("api/loadtextures")
    setTextures(data.data)
  }
  useEffect(() => {
    getTextures()
  }, [])

  useEffect(() => {
    setFilteredTextures(textures)
  }, [textures])

  return (
    <div className="flex flex-col bg-slate-50 font-[Ubuntu]">
      <Head>
        <title>Available Textures</title>
      </Head>
      <div className="flex flex-row justify-between mt-3 mb-10 mx-3">
        <p className="font-bold text-5xl mt-5 mb-10">Available Textures</p>
        <div className="px-2 text-slate-800 my-auto">
            <Searchbar textures={textures} setFilteredTextures={setFilteredTextures}></Searchbar>
        </div>
      </div>
      
      <TextureList textures={filteredTextures}></TextureList>
    </div>
  );
};

export default Home;
