import React, { useState } from 'react'
import PropTypes from "prop-types";



export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            
            setCategories(cats => [inputValue,...cats])
            setinputValue('');
        }

        
        

        

    }



    return (
        <div>

           <form onSubmit = {handleSumit}>

            <input 
                type= "Text"
                value = {inputValue}
                onChange = { handleInputChange }
            />
           </form>

            
        </div>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}


