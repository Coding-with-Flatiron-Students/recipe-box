import React from "react";
import RecipeCardBehavior from "./RecipeCardBehavior";



function RecipeBox({ 
    recipeData, 
    search, 
    categorySelect, 
    onDeleteFromBox,
    
 }){


    const recipesToDisplay= recipeData.filter(recipe=>{
        if(categorySelect==="All"){
            return true
        } if (recipe.meal.toLowerCase()===categorySelect.toLowerCase()){
            return true
        }})
    .filter(result=>result.name.toLowerCase().includes(search.toLowerCase()))
    .map(recipe=>{
        return <RecipeCardBehavior
                    key={recipe.id} 
                    recipe={recipe}
                    recipesUpdate={onDeleteFromBox}
                />
    })

 
   
    // Return of JSX
    return(
        <div id ="recipe-box" className="container">
            {recipesToDisplay}
        </div>
    )
}

export default RecipeBox;