import React, { useState } from "react";


function APIRecipeTemplate({ recipe, recipeUpdate, effortEmojis}){

    const [id, image, link, name] = recipe

   

    function handleAddToClick(){
        recipeUpdate(id)
    }



    return(
        <>

            <div id={id} className="recipe-card">
                <h2>{name}</h2>
                <img src={image} alt={name}className="img-card"></img>
                <h4>Prep Time: {effortEmojis}</h4>
                <br></br>
                <a href={link} rel="noreferrer" target="_blank">Go to Full Recipe</a>
                <br></br>
                <button className="show-more-btn" onClick={handleAddToClick}>Add to My Recipe Box!</button>
            </div>
           
        
        </>
    )
}

export default APIRecipeTemplate;