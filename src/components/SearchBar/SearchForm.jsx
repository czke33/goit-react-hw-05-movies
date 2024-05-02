import React, {useState, useEffect} from 'react';

import style from './SearchFrom.module.css';
import propTypes from 'prop-types';

export default function Searchbar ({onSubmit}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [inputValue, setInputValue] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);

  useEffect(() => {
    inputValue === "" ? setShowClearBtn(false) : setShowClearBtn(true);
  }, [inputValue]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(inputValue.trim().toLowerCase());
  };

  const onClearBtnClick = () => {
    setInputValue("");
  };

        return (
    <header className={style.Searchbar}>
                <form className={style.SearchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={style.SearchForm_button}/>
                    <svg className={style.SearchForm_logo} src="../../../assets/logo.svg" alt="logo"  />
                        <span className={style.SearchForm_button_label}>Search</span>
           

            <input
                        className={style.SearchForm_input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    </header>
    )

};

Searchbar.propTypes = {
    onSubmit: propTypes.func,
};