import React from 'react'
import { useState } from 'react';
import './task.css'
import {FiEdit} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
function Task(props) {
    let [text,settext] = useState("")

// editbox.style.display = "none"; confirm.style.display = "none";cancel.style.display = "none";

    return (
    
    <div>
      
      <div className='taskname'>
         <h5 className='mb-0'>{props.data.name}</h5>
        <div className='mt-0 mb-2'>
            <input type='text' className = " col-lg-6 ms-2" id = "editbox" onChange={(e) => {settext(e.target.value)}} placeholder={text} onfocus="value=''" value={text}></input>
            <button className = "btn  pe-2" type="" onClick={() => {props.update(props.data._id,{name:text});settext("")}}><FiEdit/></button>
             <button className = "btn  p-0" type="button" onClick={() => {props.delete(props.data._id); console.log(props.delete)}}><AiFillDelete/></button>
         <div>
        </div>
        
       
      </div>
      
      </div>
      
    </div>
  )
}

export default Task
