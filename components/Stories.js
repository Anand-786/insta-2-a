import React, { useState } from 'react';
import faker from 'faker';
import { useEffect } from "react";
import Story from './Story';
import { useSession } from "next-auth/react";
import Storyme from './Storyme';

function Stories() {
  const { data: session } = useSession();
  const userName = [
    "Magic Peach",
    "Tigger Fresh",
    "Lovecapri",
    "Hot Babe",
    "Kara",
    "The Call Me Hanny",
    "Candycane Missy",
    "Tiger Kitty",
    "Instafreack",
    "Bunny Passion",
    "Lavender",
  "Banda_Superhit",
  "Royal_Nawab",
  "Cupcake Hugs",
    "Chocolaty Queen",
  "Unique_Boy",
  "Alone_lover",
  "My_Life_My_Rules",
  "Cute_Kameena",
  "Peace Hug",
    "Lil Cutie",
    "Jelly Cuddles",
  "Branded_Harami",
  "Alone_Rider",
  "Sizzling Teapot",
    "Live Chic",
    "Beauty Babe",
    "Sleepy Tinker",
    "Super Giggles",
  "King_of_World",
  "Bad_Boy",
  "Mr_India",
  "Tabaahi_Boy",
  "Dilo_ka_King",
  "Alone_Name",
  "Twilight Queenbee",
    "Mystical Dimples",
    "Bikewithgirl",
    "Makegirls",
  "Gentle_Boy",
  "Mr_Perfect",
  "Ghost_Rider",
  "Dilo_Ka_Raja",
  "Mind_Gamer",
  "Bigda_Hua_Sehzada",
  "Bad_Munda",
  "Desi_Kalakar",
  "Branded_Kameena",
  "Desi_Munda",
  "Nayakal_Ladka",
  "Innocent_Bacha",
  ];
  const [suggestions, setSuggestions] = useState([]);
  let t = Math.floor(Math.random()*30);
  let t1 = (t>16)?(t-16):t;
  useEffect(() => {
    const suggestions = [...Array(15)].map((_, i) => {
      return userName[i+t]
    });

    setSuggestions(suggestions);
  }, [])
  
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm 
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Storyme img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile, idx) => (
        <Story key={profile} img={t1+idx} username={profile} />
      ))}
    </div>
  )
}

export default Stories