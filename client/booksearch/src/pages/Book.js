import React,{useEffect, useState} from "react";
import API from "../utils/API";
import SearchForm from "../components/Form"

function Books(){

    // const [books, setBooks] = useState([])
    // const [formObject, setFormObject] = useState({})

    // useEffect(() => {
    //     loadBooks()
    // }, [])

    // function loadBooks() {
    //     API.getBooks()
    //         .then(res => setBooks(res.data))
    //         .catch(err => console.log(err))
    // };


    return (
        <div>
            <h1>Hello World!</h1>
            <SearchForm />
        </div>
        
    );
};

export default Books;