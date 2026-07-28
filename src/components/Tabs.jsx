import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../ReduxTool/featres/searchSlice'

const Tabs = () => {
    const dispatch=useDispatch()
    const tabs = ['photos', 'vedio', 'gif']
    const activeTab =useSelector((state)=>(state.search.activeTab))
    return (
        <div id='master' className='flex gap-10  p-10'>
            {
            tabs.map(function (elem, idx) {
                return <button id='masterbuttom'key={idx}
                    className={`${activeTab === elem ? 'bg-(--colour3) text-white' : 'bg-(--colour2) text-gray-200 hover:bg-(--colour4) hover:text-black' }  p-2 cursor-pointer active:scale-50 rounded uppercase transition-colors`}
                    onClick={()=>{
                        dispatch(setActiveTab(elem))
                    }}
                    >
                    {elem}</button>
        })
        } </div>
    )
}

export default Tabs
