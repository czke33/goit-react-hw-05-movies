import { useState } from "react";
import style from "./SearchFrom.module.css";
import PropTypes from "prop-types";

const SearchFrom = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    }
        const handleChange = (e) => {
            setQuery(e.target.value);
        }
        return (
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.label} htmlFor="search">Search movie by name</label>
                <input className={style.full} type="text" value={query} onChange={handleChange} name="search" placeholder="Search movie..." autocomplete="off" />
                <button className={style.search} type="submit">Search</button>
            </form>
        )
        
    };


    SearchFrom.propTypes = {
        onSubmit: PropTypes.func.isRequired
};
    export default SearchFrom;