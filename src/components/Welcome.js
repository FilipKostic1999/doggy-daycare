import React from 'react';
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div>
            <h3 className="flex items-center justify-center text-center px-5 text text-3xl font-bold lg:text-5xl text-white my-8">You Are Welcome To Visit Our Doggy Daycare</h3>
            <Link to="/home" className=" flex items-center justify-center text-center inline-block bg-slate-400 py-2 px-6 rounded mt-8 text-black hover:bg-slate-500 
                  transition-all duration-200">
                  	&rarr; Press the button to go to the next page!
            </Link>

            <img src="https://cdn.shopify.com/s/files/1/0387/8692/4588/files/Website_Header__Doggy_Daycare_3.png?v=1600058216" alt="" />
    
    </div>
  );
};

export default Welcome;