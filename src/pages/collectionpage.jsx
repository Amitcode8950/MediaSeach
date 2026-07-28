import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ResultCard from '../components/ResultCard'
import { clearCollection } from '../ReduxTool/featres/collectionslice'
import { Link } from 'react-router-dom'

const Collectionpage = () => {
  const items = useSelector(state => state.collection.items)
  const dispatch = useDispatch()

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10 border-b border-(--colour4) pb-4">
        <h1 className="text-3xl font-bold text-(--colour4)">My Collection</h1>
        <div className="flex gap-4">
            <Link to="/" className="bg-(--colour3) text-white font-bold px-4 py-2 rounded hover:bg-(--colour1) transition-colors">Back to Search</Link>
            {items.length > 0 && (
                <button onClick={() => dispatch(clearCollection())} className="bg-red-600 text-white font-bold px-4 py-2 rounded hover:bg-red-800 transition-colors">Clear Collection</button>
            )}
        </div>
      </div>
      
      {items.length === 0 ? (
        <div className="text-center mt-20 text-(--colour4)">
          <p className="text-xl font-medium">Your collection is empty!</p>
          <Link to="/" className="text-(--colour3) font-bold hover:underline mt-4 inline-block">Go add some media</Link>
        </div>
      ) : (
        <div className='flex flex-wrap justify-center gap-5 bg-transparent overflow-auto pb-10 '>
          {items.map(item => (
            <ResultCard key={item.id} item={item} isCollection={true} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Collectionpage