import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
     <div style={{backgroundImage:`url('https://images.unsplash.com/photo-1562887189-e5d078343de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
      'backgroundSize':'cover','width':'100%','height':'100vh'
      }}>

        <h1 style={{'color':'black','margin-top':'170px'}}> TRENDY GIRL </h1>
        <p style={{color:'black'}}>BE BEAUTIFUL.BE YOU</p>
        <Link to="/menu">
         <button> ORDER NOW </button>
         </Link>
     
      </div>

       );
}

export default Home;