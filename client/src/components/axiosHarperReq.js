import axios from "axios";

require('dotenv').config(); //loads environment variables of PC

function axiosHarperReq(sqlQuery) {
    let data = JSON.stringify({operation:"sql", sql:sqlQuery});
    const config = {
        method: 'post',
        url: process.env.REACT_APP_REWIRED_HARPERDB_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${process.env.REACT_APP_REWIRED_HARPERDB_PW}`
        },
        data : data
    };

   return axios(config)
        .then(function (response) {
            return response.json;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default axiosHarperReq;