import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../ReduxTool/featres/searchSlice'

const Searchbar = () => {
    const [text, settext] = useState("")
     const dispatch=useDispatch()
        const submitHandelar=(e)=>{
            e.preventDefault()
            
            dispatch(setQuery(text))
            settext('')
        }


  return (
    <div className='flex bg-(--colour3) p-5'>
        <form onSubmit={submitHandelar} className='flex gap-2 w-full'>
            <input type="text" className='p-2 border border-(--colour4) text-(--colour4) font-bold rounded w-full' placeholder='seach anything ....' value={text} onChange={(e)=>settext(e.target.value)}/>
            <button className='bg-(--colour4) text-black font-bold px-4 py-2 rounded ml-2 active:scale-50 hover:bg-(--colour1) hover:text-white hover:text-2xl' type='submit'>Search</button>
        </form> 
    </div>
  )
}

export default Searchbar