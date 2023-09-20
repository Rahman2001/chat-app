import axios from "axios";

require('dotenv').config({}); //loads environment variables of PC

function axiosHarperReq({sqlQuery}) {
    let data = JSON.stringify({operation:"sql", sql:sqlQuery});
    const config = {
        method: 'post',
        url: 'https://cloud-rahmandb.harperdbcloud.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${process.env.HARPERDB_PW}`
        },
        data : data
    };

    console.log(`This is HarperDB password: ${process.env.HARPERDB_PW}`); //cannot get env variable from PC!
   return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.json;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default axiosHarperReq;