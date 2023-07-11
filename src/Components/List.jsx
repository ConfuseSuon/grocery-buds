import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

const List = ({items, removeItem}) => {


  return (
    <div className="grocery-list">
        {
            items.map((item, index) =>{
                const {id, title} = item

                return(
                    <article key={index} className="grocery-item">
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button type='button' className="edit-btn"><FaEdit /></button>
                            <button type='button' onClick={()=>removeItem(id)} className="delete-btn"><FaTrash /></button>
                        </div>
                    </article>
                )
            })
            
        }
    </div>
  )
}

export default List