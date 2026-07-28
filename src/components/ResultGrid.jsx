import React, {useEffect} from 'react'
import {featphoto, featvedio, featchGiphy} from '../API/mesdiaapi'
import {setLoading, setResults, setError, setQuery} from '../ReduxTool/featres/searchSlice'
import {useDispatch, useSelector} from 'react-redux'
import ResultCard from './ResultCard'
import { SpinnerDotted } from 'spinners-react';

const ResultGrid = () => {
    const {
        query,
        activeTab,
        results,
        loading,
        error
    } = useSelector((state) => state.search)

    const dispatch = useDispatch()

    const getData = async () => {
        if (!query) 
            return;
        


        try {
            dispatch(setLoading());
            let data = [];
            if (activeTab === 'photos') {
                let response = await featphoto(query, 1, 10)
                data = response.map((item) => ({
                    id: item.id,
                    type: 'photo',
                    title: item.alt_description || 'Image',
                    thumbnail: item.urls.small,
                    src: item.urls.full,
                    originalUrl: item.links.html
                }))
            } else if (activeTab === 'vedio') {
                let response = await featvedio(query, 10)
                data = response.map((item) => ({
                    id: item.id,
                    type: 'vedio',
                    title: item.alt_description || 'vedio',
                    thumbnail: item.image,
                    src: item.video_files[0].link,
                    originalUrl: item.url
                }))
            } else if (activeTab === 'gif') {
                let response = await featchGiphy(query, 10)
                data = response.map((item) => ({
                    id: item.id,
                    type: 'gif',
                    title: item.title || 'gif',
                    thumbnail: item.images ?. fixed_width_small ?. url,
                    src: item.images ?. fixed_height ?. url,
                    originalUrl: item.url
                }))
            }

            dispatch(setResults(data || []))
        } catch (err) {
            dispatch(setError(err.message))
        }
    }

    useEffect(() => {
        getData();
    }, [query, activeTab])

    if (error) 
        return <h1 className='text-center text-red-500 text-xl mt-10'>Error: {error}</h1>


    


    if (loading) 
        return (
            <div className='flex justify-center items-center mt-20 w-full'>
                <SpinnerDotted 
                    size={89}
                    thickness={170}
                    speed={169}
                    color="rgba(225, 220, 112, 1)"
                />
            </div>
        )


    

    return (
        <div id='mastercard' className='flex flex-wrap justify-center gap-5 bg-transparent overflow-auto px-10 pb-10 '>
            {
            results.map((item) => {
                return (
                    <ResultCard key={
                            item.id
                        }
                        item={item}/>
                )
            })
        } </div>
    )
}

export default ResultGrid
