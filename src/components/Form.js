import React, { useState } from 'react';
import Header from './Header';
import '../Form.css'
import axios from 'axios';

export default function Form() {

    const initialFormState = {
        name: "",
        pizzasize: "",
        pizzasauce: "",
        instructions: "",
        toppings: [],
        id: "",
        createdAt: ""
    }

    // State for Axios Post
    const [post, setPost] = useState([]);

    // State for the form
    const [formState, setFormState] = useState(initialFormState);


    // Submit POST Request by sending formState

    const submitForm = e => {
        e.preventDefault();
        console.log(formState);

        // Send POST request with object

        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => console.log("Something went wrong!", error))
    }

    // Update inputs onChange
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.value
        };
        // Update state with new data
        setFormState(newFormData);
    }

    // Update Selected Toppings
    const inputChangeToppings = e => {
        let toppings = formState.toppings;
        let topping = e.target.name;
        let selected = e.target.checked;
        if (selected) {
            toppings.push(topping)
            } else {
                let index = toppings.indexOf(topping)
                toppings.splice(index, 1)
            }
            e.persist();
            const newFormData = {
                ...formState,
                ["toppings"]: toppings
            };
            // Update state with new Data 
            setFormState(newFormData)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <h1>Build Your Own Pizza</h1>
                <hr />
                <label htmlFor="name">
                    Your Name <br />
                    <br />
                    <input
                        type="text"
                        name="name"
                        onChange={inputChange}
                        placeholder="Your Name"
                        data-cy="name"
                    />
                </label>
                <br />
                <br />
                <hr />
                <label htmlFor="pizzasize">
                    Choice of Size <br />
                    <br />
                    <select
                        id="pizzasize"
                        name="pizzasize"
                        value={formState.pizzasize}
                        onChange={inputChange}>
                            <option>Select</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                    </select>
                </label>
                <br />
                <br />
                <hr />
                <label htmlFor="pizzasauce">
                    Choice of Sauce <br />
                    Required <br />
                    <br />
                </label>
                    <input
                        type="radio"
                        id="original-red"
                        name="pizzasauce"
                        value="original-red"
                        checked={formState.pizzasauce == "original-red"}
                        onChange={inputChange}>
                    </input>
                <label htmlFor="original-red">Original Red</label>
                    <br />
                    <br />
                    <input 
                        type="radio"
                        id="garlic-ranch"
                        name="pizzasauce"
                        value="garlic-ranch"
                        checked={formState.pizzasauce == "garlic-ranch"}
                        onChange={inputChange}>
                    </input>
                <label htmlFor="garlic-ranch">Garlic Ranch</label>
                    <br />
                    <br />
                    <input 
                        type="radio"
                        id="bbq-sauce"
                        name="pizzasauce"
                        value="bbq-sauce"
                        checked={formState.pizzasauce == "bbq-sauce"}
                        onChange={inputChange}>
                    </input>
                <label htmlFor="bbq-sauce">BBQ Sauce</label>
                    <br />
                    <br />
                    <input 
                        type="radio"
                        id="spinach-alfredo"
                        name="pizzasauce"
                        value="spinach-alfredo"
                        checked={formState.pizzasauce == "spinach-alfredo"}
                        onChange={inputChange}>
                    </input>
                <label htmlFor="spinach-alfredo">Spinach Alfredo</label>
                    <br />
                    <br />
                    <hr />
                <label htmlFor="topping">
                    Add Toppics <br />
                    Choose up to 10. <br />
                    <br /></label>
                    <input
                        type="checkbox"
                        id="pepperoni"
                        name="pepperoni"
                        value="pepperoni"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="topping">Pepperoni</label>
                    <br />
                    <input
                        type="checkbox"
                        id="sausage"
                        name="sausage"
                        value="sausage"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="sausage">Sausage</label>
                    <br />
                    <input
                        type="checkbox"
                        id="canadian-bacon"
                        name="canadian-bacon"
                        value="canadian-bacon"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="canadianbacon">Canadian Bacon</label>
                    <br />
                    <input
                        type="checkbox"
                        id="spicy-italian-sausage"
                        name="spicy-italian-sausage"
                        value="spicy-italian-sausage"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="spicyitaliansausage">Spicy Italian Sausage</label>
                    <br />
                    <input
                        type="checkbox"
                        id="grilled-chicken"
                        name="grilled-chicken"
                        value="grilled-chicken"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="grilledchicken">Grilled Chicken</label>
                    <br />
                    <input
                        type="checkbox"
                        id="onions"
                        name="onions"
                        value="onions"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="onions">Onions</label>
                    <br />
                    <input
                        type="checkbox"
                        id="green-pepper"
                        name="green-pepper"
                        value="green-pepper"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="greenpepper">Green Pepper</label>
                    <br />
                    <input
                        type="checkbox"
                        id="diced-tomatos"
                        name="diced-tomatos"
                        value="diced-tomatos"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="dicedtomatos">Diced Tomatos</label>
                    <br />
                    <input
                        type="checkbox"
                        id="black-olives"
                        name="black-olives"
                        value="black-olives"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="blackolives">Black Olives</label>
                    <br />
                    <input
                        type="checkbox"
                        id="roasted-garlic"
                        name="roasted-garlic"
                        value="roasted-garlic"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="roastedgarlic">Roasted Garlic</label>
                    <br />
                    <input
                        type="checkbox"
                        id="artichoke-hearts"
                        name="artichoke-hearts"
                        value="artichoke-hearts"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="artichokehearts">Artichoke Hearts</label>
                    <br />
                    <input
                        type="checkbox"
                        id="three-cheese"
                        name="three-cheese"
                        value="three-cheese"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="threecheese">Three Cheese</label>
                    <br />
                    <input
                        type="checkbox"
                        id="pineapple"
                        name="pineapple"
                        value="pineapple"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="pineapple">Pineapple</label>
                    <br />
                    <input
                        type="checkbox"
                        id="extra-cheese"
                        name="extra-cheese"
                        value="extra-cheese"
                        onChange={inputChangeToppings}>
                    </input>
                <label htmlFor="extracheese">Extra Cheese</label>
                    <br />
                    <hr />
                    <label htmlFor="pizza-toppings">
                    Choice of Substitute <br />
                    Choose up to 1 <br />
                    <br /></label>
                        <p>Toggle on/off</p>
                    <hr />
                <label htmlFor="instructions">
                    Special Instructions</label>
                    <br />
                    <br />
                    <input
                    type="text"
                    name="instructions"
                    onChange={inputChange}
                    placeholder="Anything else you'd like to add?"
                    >
                </input>
                <pre>{JSON.stringify(post, null, 2)}</pre>    
                <button onClick={submitForm} type="submit">
                    Add To Order
                </button>
            </form>
        </div>
    )
}