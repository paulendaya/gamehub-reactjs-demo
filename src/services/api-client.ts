import axios, {CanceledError} from "axios";

<<<<<<< HEAD
=======
export interface FetchResponse<T> {
    count: number;
    results: T[];
}

>>>>>>> master
const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        'key': 'c9655be224734e5d89fbd2e3d43742e2'
    }
})

export default apiClient;
export  {CanceledError};