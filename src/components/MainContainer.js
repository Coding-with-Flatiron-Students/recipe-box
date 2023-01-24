import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import RecipeBox from "./RecipeBox";
import RecipeContainer from "./RecipeContainer";
import Home from "./Home";
import NewRecipe from "./NewRecipe";

function MainContainer({ recipeData, apiRecipes, search, categorySelect, onNewRecipeSubmit, onDeleteFromBox, setSearch }){
    const history = useHistory();

 

    // Auto-populating the NewRecipe form data upon click
    function onAddRecipeClick(id){
        
        history.push("/add-recipe")
    }

// Translate 'readyInMinutes' from API data to a 1-5 scale for ⏰
    

    // Return of JSX
    return(
        <div id="main-container" className="main-container">
            <Switch>
                <Route exact path="/recipes">
                    <RecipeContainer
                        containerType="recipes"
                        apiRecipes={apiRecipes} 
                        search={search}
                        onAddRecipeClick={onAddRecipeClick}
                    />
                </Route>
                <Route exact path="/recipe-box">
                    <RecipeBox 
                        containerType="recipe-box"
                        recipeData={recipeData} 
                        search={search} 
                        categorySelect={categorySelect}
                        onDeleteFromBox={onDeleteFromBox}
                    />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/add-recipe">
                    <NewRecipe 
                        onNewRecipeSubmit={onNewRecipeSubmit}
                        
                    />
                </Route>
                <Route path="*">
                    <h1>Error 404  Page Not Found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer;