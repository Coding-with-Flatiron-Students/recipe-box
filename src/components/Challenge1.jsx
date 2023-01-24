// Challenge 1
// Add a new controlled form on your search new recipes page that takes in a max number of minutes and filters the new recipes based on that constraint.

/**
 * Asked: 
 * 
 * Where my Data => App => RecipeContainer(/recipes)
 * Recipe is where I'm showing the results
 * 
 * New Component =>
 * Form that takes in a number => Will help filter the results in my RecipeContainer based on the time enter
 * 
 * EdgeCases => 
 *  AllResults <= time inputed
 *  FUll Search Results
 
 */


function Challenge1({timeFilter, setTimeFilter, handleFilter}){
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleFilter()
    }

    const handleChange = (e) => {
        setTimeFilter(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={timeFilter}
                onChange={handleChange}
            />
            <button>
                Search based on Time
            </button>
        </form>
    )
}

export default Challenge1