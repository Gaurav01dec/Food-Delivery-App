import { useEffect, useState } from "react"
import Mealitem from "./Mealitem";

export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);


    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch("http://localhost:3000/meals");

            if (!response.ok) {
                //...... some code 
            }

            const meals = await response.json()
            // console.log(meals)
            // debugger;
            // console.log(loadedMeals)
            setLoadedMeals(meals);
            // console.log(loadedMeals)
        }

        fetchMeals();
    }, [])



    return (
        <ul id="meals">{loadedMeals.map((meal) => (
            // <li key={meal.id}>{meal.name}</li>
<Mealitem key={meal.id} meal={meal}/>
        ))}</ul>

    )
};
