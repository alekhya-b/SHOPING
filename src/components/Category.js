import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import Items from '../components/Items';

const Category = () => {
    const[data,setData]=useState(Items);
    const filterResult=(catItem)=>{
        const result=Items.filter((curData)=>{
            return curData.category===catItem;
        });
        setData(result);
    }
  return (

    <div>
      <h1  className='text-center text-info '>LET'S SHOP</h1>
      <div className='container-fluid' mx-2>
        <div className='row mt-5 mx-2'>
            <div className='col-md-3'>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('LIPSTICKS')} >LIPSTICKS</button>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('EYE SHADOW')}>EYE SHADOW</button>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('EYE KIT')}>EYE KIT</button>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('NAIL POLISH')}>NAIL POLISH</button>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('HAIR ITEMS')}>HAIR ITEMS</button>
                <button style={{'color':'black', 'backgroundColor':'pink'}} className='btn btn-warning w-100 mb-4' onClick={()=>setData(Items)}>ALL</button>
 </div>
 {/* <Items/> */}

 <div className='col-md-9'>
    <div className='row'>
        {data.map((values)=>{
            const{id,title,image,price}=values;
            return(
                <div className='col-md-4 mb-4' key={id}>

    <div className="card" >
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5  className="card-title">{title}</h5>
    <p>Price:{price}</p>
    <p className="card-text">Brand Nykaa excellent waterproof prouducts and super quality.</p>
    <button style={{'backgroundColor':'black','color':"white"}} className="btn btn-dark">Buy Now</button>
  </div>
</div>
    </div>
      )
})}
 </div>
 </div>
 </div>
 </div>
 </div>

    
  )
}

export default Category
