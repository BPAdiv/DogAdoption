
import { useState } from "react";
function Context() {
    const [formPopUp, setFormPopUp] = useState(false)
    const [ListOfDog, setListOfDogs] = useState([
        {
            name: "jackson",
            type: "male",
            size: "big",
            age: 7
        },
        {
            name: "rts",
            type: "female",
            size: "big",
            age: 4
        },
        {
            name: "jackson",
            type: "male",
            size: "big",
            age: 3
        },
        {
            name: "nam",
            type: "female",
            size: "small",
            age: 1
        },
        {
            name: "jackson",
            type: "male",
            size: "big",
            age: 7
        },
        {
            name: "mika",
            type: "female",
            size: "big",
            age: 4
        },
        {
            name: "sus",
            type: "male",
            size: "big",
            age: 3
        },
        {
            name: "conata",
            type: "female",
            size: "small",
            age: 1
        },
        {
            name: "jack",
            type: "male",
            size: "big",
            age: 7
        },
        {
            name: "mani",
            type: "female",
            size: "big",
            age: 4
        },
        {
            name: "haim",
            type: "male",
            size: "big",
            age: 3
        },
        {
            name: "lora",
            type: "female",
            size: "small",
            age: 1
        },
    ])

    return {
        ListOfDog,
        setListOfDogs,
        setFormPopUp,
        formPopUp
    }
}
export default Context;