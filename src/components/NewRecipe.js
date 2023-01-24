import React, {useState} from "react";

function NewRecipe({ onNewRecipeSubmit}){
    
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        image: "",
        status: "--Select Status of Recipe--",
        effort: "--Select Effort Level--",
        meal: "--Select Effort Level--",
        notes: "",
        link: "",
    })
    
    const [title, image, status, effort, meal, notes, link] = newRecipe


        function handleChange(e){
            setNewRecipe({...newRecipe, 
            [e.target.name]: e.target.value})
        }

    function handleFormSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:3000/recipes",{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res=>res.json())
        .then(postedRecipe =>onNewRecipeSubmit(postedRecipe))
        
       setNewRecipe({
        name: "",
        image: "",
        status: "--Select Status of Recipe--",
        effort: "--Select Effort Level--",
        meal: "--Select Effort Level--",
        notes: "",
        link: "",
    })
    }


    // Return JSX
    return(
        <div id ="add-new-recipe" className="add-new-recipe">
            <h2>ADD NEW RECIPE</h2>
            <form onSubmit={handleFormSubmit}>
                
                <label>
                    {/* Title: */}
                    <input value={title} onChange={handleChange} type="text" name="title" placeholder="Title" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Link to Image: */}
                    <input placeholder="Link to Image" value={image} onChange={handleChange} type="text" name="image" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Link to Full Recipe: */}
                    <input placeholder="Link to Full Recipe" value={link} onChange={handleChange} type="text" name="link" className="text-input"/>
                </label>
                <br></br>
                <label>
                    {/* Effort : */}
                    <select value ={effort} onChange={handleChange} name="effort" className="dropdown">
                        <option disabled>--Select Effort Level--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Meal : */}
                    <select value ={meal} onChange={handleChange} name="Meal" className="dropdown">
                        <option disabled>--Select Meal--</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Side</option>
                        <option>Dessert</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Status : */}
                    <select value={status} onChange={handleChange} name="status" className="dropdown">
                        <option disabled>--Select Status of Recipe--</option>
                        <option>Repeat</option>
                        <option>Need to try it</option>
                        <option>Meh</option>
                    </select>
                </label>
                <br></br>
                <label>
                    {/* Notes: (optional) */}
                    <input placeholder= "Notes (optional)" value={notes} onChange={handleChange} type="text" name="notes" className="text-input"/>
                </label>
                <br></br>
                <input type="submit" value="Submit" id="new-submit-btn"/>
            </form>
        </div>
    )
}

export default NewRecipe;