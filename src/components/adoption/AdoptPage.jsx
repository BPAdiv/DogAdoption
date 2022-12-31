import { useState } from "react"
import { useContext } from "react"
import { ActionContext } from "../../App"

import DogsList from "../dogspages/DogsList"
import './adopt-dog.css'




function AdoptPage() {


    const { ListOfDog, setFormPopUp, formPopUp } = useContext(ActionContext)



    const [dogAge, setDogAge] = useState('')
    const [dogSize, setDogSize] = useState("")
    const [dogType, setDogType] = useState("")
    const Search = (data) => {
        return data.filter(
            (item) => {
                if (dogSize === "") {
                    return item;
                } else if (item.size === dogSize) {
                    return item
                } else return null
            }).filter(
                (item) => {
                    if (dogType === "") {
                        return item;
                    } else if (item.type === dogType) {
                        return item
                    } else return null
                }).filter(
                    (item) => {
                        if (dogAge === "") {
                            return item;
                        } else if (dogAge === "puppy") {
                            return item.age <= 1
                        } else if (dogAge === "grown") {
                            return item.age > 1
                        } else return null
                    })



    }
    function SearchInputAge(e) {
        setDogAge(e.target.value)
        console.log(e.target.value)
        // setDogAge(e.target.value)
    }
    function SearchInputSize(e) {
        setDogSize(e.target.value)
        console.log(e.target.value)
        // setDogAge(e.target.value)
    }
    function SearchInputType(e) {
        setDogType(e.target.value)
        console.log(e.target.value)
        // setDogAge(e.target.value)
    }
    return (
        <div className="adopt-page">
            <section className="search-area">
                <h1>Adobt your do today</h1>
                <div className="search-inputs">
                    <select className="select-age" onChange={SearchInputAge}>
                        <option value="">Age</option>
                        <option value="grown">Above 1 year</option>
                        <option value="puppy">Less then 1 year</option>

                    </select>
                    <select className="select-size" onChange={SearchInputSize}>
                        <option value="">Size</option>
                        <option value="big">Big</option>
                        <option value="medium">Medium</option>
                        <option value="small">Small</option>
                    </select>
                    <select className="select-type" onChange={SearchInputType}>
                        <option value="">Type</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>

                    </select>
                </div>
            </section>
            <div className="list-of-dogs">
                <DogsList data={Search(ListOfDog)} />
            </div>
            <div className="find-form">
                <h3>Didnt find your dog?</h3>
                <button onClick={() => setFormPopUp(!formPopUp)}
                // onClick={() => setFormPopUp(!formPopUp)}
                >Contact us</button>
            </div>
        </div>
    )
}
export default AdoptPage