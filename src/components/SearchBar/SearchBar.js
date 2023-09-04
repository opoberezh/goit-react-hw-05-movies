import {FcSearch} from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, SearchFormInput, SearchFormButton, Wrapper } from "./SearchBar.styled";
import { useState } from "react";


  

export const SearchBar = (props) => {
    const [query, setQuery] = useState('');

    const inputSearch = evt => {
        evt.preventDefault();
        console.log(evt);
        if (query.trim() === '') {
            toast(" Oops! Search query is empty!", {
                icon: "🦄"
            });
            return;
        } else {
            toast.success("We found some movies for you!", {
                icon: "🚀"
            });
        }
        props.onSubmit(evt, query);
        setQuery('');
    };

    const inputChange = evt => {
        setQuery(evt.target.value)
    };

    return (
        <Wrapper>
             <SearchForm onSubmit={inputSearch}>
            <SearchFormButton type="submit">
                <FcSearch size={22}/>
            </SearchFormButton>

            <SearchFormInput
                type="text"
                value={query}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                onChange={inputChange}
            />
        </SearchForm>
        </Wrapper>
       
    )
}

