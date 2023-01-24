import React from "react"

function RecipeBoxTemplate ({recipe, recipesUpdate, setShowMore , showMore, effortEmojis}) {


    const {id, image, link, name, status, meal} = recipe
    

    const handleRecipeEdit = () => {

    }

    const noteLis = () => {
        return null
    }

    return(
        <div id={id} className="recipe-card">
                <h2 className= "recipe-title">{name}</h2>
                <img src={image} alt={name} className="img-card" />
                <h4 className= "effort-level">Prep Time: {effortEmojis}</h4>
                <a href={link} rel="noreferrer" target="_blank">Go to Full Recipe</a>
                <br></br>
                <button className= "show-more-btn" onClick={()=>setShowMore((showMore) => !showMore)}>{showMore ? "Hide Details" : "Show More Details"}</button>
                <div hidden={ showMore ? null : "disabled"} id="show-more">
                    <h3>Meal: {meal}</h3>
                
                    <h4>Status of Recipe: {status}</h4>
                    <h4>Notes: </h4>
                    <ul>
                        {noteLis}
                    </ul>
                    <button className= "show-more-btn"onClick={handleRecipeEdit}>Edit Details</button>
                    <br></br>
                    <button className= "show-more-btn"onClick={recipesUpdate}>Delete from My Recipe Box</button>
                </div>
        </div>
    )
}

export default RecipeBoxTemplate