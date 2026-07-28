import React from 'react'
import Searchbar from '../components/Searchbar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const {query} = useSelector((store) => store.search);
    return (
        <div>

            <div className=' py-6 px-10 bg-(--colour2) flex justify-between items-center'>
                <h2 className='font-bold text-3xl text-(--colour4)'>Media Search</h2>
                <Link to="/collection" className="bg-(--colour3) text-white font-bold px-4 py-2 rounded hover:bg-(--colour1) transition-colors">
                    View Collection
                </Link>
            </div>

            <Searchbar/> 
           { query != '' ? <div><Tabs/>
                <ResultGrid/>
            </div> : ' '}
        </div>
    )
}

export default Homepage
