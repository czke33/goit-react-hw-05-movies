import { useState } from "react";
import style from "./SearchFrom.module.css";



const SearchForm = () => {

    const [query, setQuery] = useState('');
   const onSearch = (query) => {
        console.log(query);
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        onSearch(query);
        setQuery('');
    }
    function handleChange(e) {
        setQuery(e.target.value.toLowerCase());
    }
        return (
            <form className={style.form} onSubmit={handleSubmit}>
                <h2 className={style.label}>Search movie by name</h2>
                <input className={style.full} type="text" value={query} onChange={handleChange} name="search" placeholder="Search movie..."  />
                <button className={style.search} type="submit">Search</button>
            </form>
        )
        
    };


    export default SearchForm;