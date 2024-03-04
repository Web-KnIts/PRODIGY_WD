import { useState } from "react"
import { AsyncPaginate } from 'react-select-async-paginate';
import { url,geoApiOptions  } from "../api";

const Search = ({onSearchChange}) =>{

    const [search,setSearch] = useState(null)

    const HandleOnSearch = (e) =>{
        setSearch(e)
        onSearchChange(e)
    }

    const loadOptions = (Inputoption) =>{
        return fetch(`${url}/cities?minPopulation=1000000&namePrefix=${Inputoption}`,geoApiOptions)
        .then(res => res.json())
        .then(res => {
            return {
                options:res.data.map((city)=>{
                    return {
                        value:`${city.latitude} ${city.longitude}`,
                        label :`${city.name}, ${city.countryCode}`
                    }

                })
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={(e)=>HandleOnSearch(e)}
        loadOptions={loadOptions}
        />
    )
}
export default Search