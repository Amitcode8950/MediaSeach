import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, removeCollection } from '../ReduxTool/featres/collectionslice'

const ResultCard = ({ item, isCollection }) => {
    const dispatch = useDispatch()
    
    const handleAction = (e) => {
        e.preventDefault();
        if (isCollection) {
            dispatch(removeCollection(item.id))
        } else {
            dispatch(addCollection(item))
        }
    }

    return (
        <div id='maincard' className='w-80 h-80 bg-(--colour2) rounded-lg overflow-hidden shadow-md mt-5 relative group flex flex-col'>

            {/* Action Icon Button */}
            <button className={`absolute top-3 right-3 z-10 bg-white/40 backdrop-blur-md hover:bg-white p-2 rounded-full shadow-lg text-black transition-all duration-300 ${isCollection ? 'hover:text-red-600' : 'hover:text-pink-600'}`}
                onClick={handleAction}
                title={isCollection ? "Remove from Collection" : "Save to Collection"}>
                {isCollection ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                    </svg>
                )}
            </button>

            {/* Clickable Media Area */}
            <a href={
                    item.originalUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow w-full h-full relative block">
                {
                item.type === 'photo' ? (
                    <img src={
                            item.src
                        }
                        alt={
                            item.title
                        }
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                ) : ''
            }

                {
                item.type === 'vedio' ? (
                    <video src={
                            item.src
                        }
                        poster={
                            item.thumbnail
                        }
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"/>
                ) : ''
            }

                {
                item.type === 'gif' ? (
                    <img src={
                            item.src
                        }
                        alt={
                            item.title
                        }
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                ) : ''
            }

                {/* Premium Title Overlay */}
                <div className='absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12 pb-4 px-4 pointer-events-none'>
                    <h1 className='text-white font-semibold tracking-wide text-sm truncate drop-shadow-md capitalize'>
                        {
                        item.title
                    } </h1>
                </div>
            </a>
        </div>
    )
}

export default ResultCard
