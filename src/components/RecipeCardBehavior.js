import React, { useState } from "react";
import { useHistory} from "react-router-dom"
import RecipeBoxTemplate from "./RecipeBoxTemplate";
import APIRecipeTemplate from "./APIRecipeTemplate"


function RecipeCardBehavior({ recipe, recipeUpdate, recipeType}){

    const [showMore, setShowMore] = useState(false)

    function effortAmount(){
        const timeInt = parseInt(recipe.time)
        if (timeInt <10){
            return 1;
        } 
        if (timeInt >=10 && timeInt<=20){
            return 2
        } 
        if (timeInt >20 && timeInt <=30){
            return 3
        }
        if (timeInt >30 && timeInt <=45){
            return 4
        } else return 5
    }


    const effortEmojis = [...Array(effortAmount())].map(()=>"⏰")

    return(
        <>
        {recipeType === "recipes" ? 
            <APIRecipeTemplate 
                recipe={recipe} 
                recipesUpdate={recipeUpdate}
                effortEmojis={effortEmojis}
            /> 
        : 
            <RecipeBoxTemplate
                recipe={recipe}
                recipesUpdate={recipeUpdate}
                setShowMore={setShowMore}
                showMore={showMore}
                effortEmojis={effortEmojis}
            />
        }
        
        </>
    )
}

export default RecipeCardBehavior;