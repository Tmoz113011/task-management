import axios from "axios";

class HttpClient {
    constructor(base_url) {
        this._base_url = base_url;
    }

    get(uri, options = {}) {
        return axios.get(uri, options);
    }

    post(uri, data, options = {}) {
        return axios.post(uri, data, options);
    }
}

export { HttpClient }
