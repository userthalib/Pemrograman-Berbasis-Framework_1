import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteApi from "./Delete";

// Daftar API - GET 
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDiKirim) => PostAPI('posts', dataYgDiKirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDiHapus) => DeleteApi('posts', dataYgDiHapus);

const API ={            //Inisialisasi Function-function yang akan disedikana global API.
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;
