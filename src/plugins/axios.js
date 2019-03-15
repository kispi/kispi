import axios from 'axios'

axios.defaults.transformResponse = [function(response) {
    if (typeof response === "string") {
        try {
            var json = JSON.parse(response);
        } catch (e) {
            return response;
        }
        if (json.status == "failed") {
            throw json.message;
        }
        return json;
    }
    return response;
}];
axios.defaults.baseURL = process.env.apiUrl