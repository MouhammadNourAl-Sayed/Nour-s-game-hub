import axios from "axios";


export default axios.create(
    {
        baseURL : 'https://api.rawg.io/api',
        params:{
            key : '24d69f69253a4df7b723ffbd19d9ec35'
        }
    }
)