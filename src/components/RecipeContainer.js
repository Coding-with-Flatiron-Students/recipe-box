import React, {useState} from "react";
import Challenge1 from "./Challenge1";
import RecipeCardBehavior from "./RecipeCardBehavior";

function RecipeContainer({ apiRecipes, search, onAddRecipeClick}){

    const [timeFilter, setTimeFilter] = useState("")
    const [showTime, setShowTime] = useState(false)
    const base = apiRecipes.baseUri

    function handleFilter(){
        setShowTime(true)
    }

    const timeFiltered = apiRecipes.results.filter(result => result.readyInMinutes <= parseInt(timeFilter))
    const categoryFiltered = apiRecipes.results.filter(result => result.title.toLowerCase().includes(search.toLowerCase()))
    
    const recipesToDisplay = showTime ? timeFiltered : categoryFiltered

   
   const returnRecipes =  recipesToDisplay.map(recipe => {
        return <RecipeCardBehavior
                    key={recipe.id} 
                    recipe={recipe}
                    recipesUpdate={onAddRecipeClick}
                />
    })



    return(
        <div id="recipe-container" className="container">
            <Challenge1 timeFilter={timeFilter} setTimeFilter={setTimeFilter} handleFilter={handleFilter}/>
            {returnRecipes}
        </div>
    )
}

export default RecipeContainer;