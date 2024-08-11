import React from 'react'
export default function(props) {

  return (
      <div 
      onClick={props.onClick}
      style={{border:"2px solid",height:'100px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}
      className='sqaure'>
      <div>{props.value}</div>
    </div>
  )
}
