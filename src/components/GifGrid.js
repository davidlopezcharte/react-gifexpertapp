import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GitGridItem } from './GitGridItem';



export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

   const { data: images, loading }= useFetchGifs(category);
   


    // const [count, setcount] = useState(0);
    
    //Cuando vemos esto es porque quiero que se ejecute esta instruccion
    // cuando el componente es renderizado por primera vez
    
    // useEffect ( ( )=> {
    //     getGifs(category)
    //         .then (imgs => setImages(imgs))
    // }, [ category ]);

    // const getGifs = async () => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category) }&limit=10&api_key=95JXE3HT24igZZNrE24mLQqOdPfxBuoY`
    //     const resp = await fetch ( url );
    //     const {data} = await resp.json();
    //     const gifs = data.map(img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })


    //     console.log(gifs);
    //     setImages(gifs);


        
    // }

    // getGifs();



    return (

        <> 

             <h3 className = "card animate__animated animate__fadeIn">{category}</h3>

             { loading && <p className = "card animate__animated animate__flash">Loading</p>}

            
        <div className= "card-grid">

            
                
                {
                    images.map (img => {
                        return <GitGridItem 
                        key = {img.id} 
                        {...img}
                        />
                    })
                } 
            
            
            
            
        </div>
        </>
    )
}
