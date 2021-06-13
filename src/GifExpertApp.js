import React, { useState } from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
        
    // }

    // const handleAdd = () => {

    //     setCategories(cate => ['Angelica',...cate] )
    //     // setCategories ([...categories, 'Pedro', ])
        
    // }
        


    return (
        <>

            <h2>GifExpertApp</h2>
            <AddCategory setCategories= {setCategories}/>
            <hr/>


        

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            key = {category}                        
                            category = {category}/>
                    })
                }
            
            </ol>
                    
        </>
    )
}

export default GifExpertApp;


// GifExpertApp = () => {

//     return (  

//         <div>
//             <h2>GifExpertApp</h2>
//         </div>
         
    
//     )

    

// }

// export default GifExpertApp;