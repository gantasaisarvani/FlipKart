import React from 'react';

import beauty from '../images/beauty.png';
import electronic from '../images/electronics.png';
import fashion from '../images/fashion.png';
import fly from '../images/fly.png';
import fur from '../images/fur.png';
import grocery from '../images/grocery.png';
import home from '../images/home.png';
import mobile from '../images/mobiles.png';
import offers from '../images/offers.png';
import tv from '../images/tv.png';


function Menu(){
    return(
        <>
        <div className='row mt-2 com samples'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={offers}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mobile}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={electronic}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={tv}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fashion}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={beauty}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={home}/>  
            <p>Home & Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={fur}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={fly}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={grocery}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;
