import axios from "axios";

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY=import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY=import.meta.env.VITE_GIPHY_KEY;

async function featphoto(query, page,per_page){
   const res= await axios.get('https://api.unsplash.com/search/photos',{
    params:{query, page, per_page:30},   
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data.results;
}
async function featvedio(query,per_page){
   const res= await axios.get('https://api.pexels.com/videos/search',{
    params:{query, per_page:40},
    headers:{Authorization: PEXELS_KEY}
    })
    return res.data.videos;
}
async function featchGiphy(query,per_page) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: { q: query, limit: per_page=40, api_key: GIPHY_KEY }
    })
    return res.data.data;
}

export {featphoto,featvedio,featchGiphy}
