import axios from "axios";

const url = "http://localhost:5000";

const getNames = () => {
    return axios.get(`${url}/names`);
};

const getByName = (name) => {
    return axios.get(`${url}/names?name=${name}`);
};

const getPopular = (response) => {
    return response.sort((a, b) => {
        return b.amount - a.amount;
    });
};

const getAlphabetical = (response) => {
    return response.sort((a, b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
};

const getTotal = (response) => {
    let sum = 0;
    response.forEach((e) => {
        sum += e.amount;
    });
    return sum;
};

const Service = { getNames, getByName, getPopular, getAlphabetical, getTotal };
export default Service;
