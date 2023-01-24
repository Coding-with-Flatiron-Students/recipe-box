import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import MainContainer from './MainContainer';
import { useHistory } from 'react-router-dom';

function App() {

// Initialization of state variables
  const [apiRecipes, setApiRecipes] = useState([])
  const [recipeData, setRecipeData] = useState([])
  const [search, setSearch] = useState("");
  const [categorySelect, setCategorySelect] = useState("All")
  
  const history = useHistory();


  // Fetch of db.json for "My Recipe Box"
useEffect(()=>{

  fetch("http://localhost:3000/recipes")
  .then(res=>res.json()) 
  .then(data=>setRecipeData(data))
  .catch(err => console.error(err));

  
  fetch('https://webknox-recipes.p.rapidapi.com/recipes/search?query=food&number=100&type=main%20course', { method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f210eecfb5mshfc612e739004a93p1bdbcbjsn591e5976f5cf',
      'X-RapidAPI-Host': 'webknox-recipes.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(response => setApiRecipes(response))
    .catch(err => console.error(err));
}, [])


 

function handleNewRecipe(newRecipe){
  setRecipeData([...recipeData, newRecipe]);
  history.push("/recipe-box")
}

function onDeleteFromBox(recipe){
  fetch(`http://localhost:3000/recipes/${recipe.id}`,{
    method: "DELETE"
})
.then(res=>res.json())
.then(data => {
  const newData = recipeData.filter(r => r.id !== recipe.id)
  setRecipeData(newData)
  history.push("/add-recipe")
});
}

// Return JSX
  return (
    <div className="App">
      <Header 
          search={search} 
          setSearch={setSearch} 
          categorySelect={categorySelect} 
          setCategorySelect={setCategorySelect}
      />
      <MainContainer 
          apiRecipes={apiRecipes} 
          recipeData={recipeData} 
          search={search} 
          categorySelect={categorySelect}
          onNewRecipeSubmit={handleNewRecipe}
          onDeleteFromBox={onDeleteFromBox}
          setSearch={setSearch}
      />
    </div>
  )
}

export default App;