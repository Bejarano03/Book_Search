import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    getBook: function (id) {
        return axios.get("/api/books" + id);
    },
    deleteBook: function (id) {
        return axios.get("/api/books" + id);
    },
    saveBook: function (id) {
        return axios.get("/api/books" +id)
    }
};