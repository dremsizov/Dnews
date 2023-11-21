import { useState } from "react"

export default function useForm(onSubmitHandler,initialValues) {


    const [values, setValues] = useState(initialValues)

    const changeHandler = (e) =>{
        setValues(state => ({

        ...state,
        [e.target.name]: e.target.value

        }))
    }


    const submitHandler = (e) => {
        e.preventDefault();

        onSubmitHandler(values);
    };
    return{

        values,
        changeHandler,
       

    }
}