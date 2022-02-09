import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samuari X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samuari X', 'Dragon Ball']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'HunterXHunter']);
    //     setCategories( cats => [...cats, 'HunterXHunter']);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            

            <ol>
                { 
                    categories.map( (category, i) =>{
                        return <li key={ category }>{category}</li>
                    }) 
                }
            </ol>
        </>
    )

}

export default GifExpertApp;