import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "29a6c3ac150bc84cfbf876b5459a507b",
        laugauge: "en-US"
    }
});

export default api;