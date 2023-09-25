import axios from "axios";

require('dotenv').config(); //loads environment variables from .env file located in the root
const isSelect = ''
function axiosHarperReq(sqlQuery) {
    let data = JSON.stringify({operation: "sql", sql: sqlQuery});
    const config = {
        method: 'post',
        url: process.env.REACT_APP_REWIRED_HARPERDB_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${process.env.REACT_APP_REWIRED_HARPERDB_PW}`
        },
        data: data
    };

    return axios(config)
        .then((res) => {
            if(/^insert\s+into/.test(sqlQuery)) { // checks the pattern for insert operation
                if(res.status === 200) {
                    return {message:'Account has been successfully created!', status:200};
                }else {
                    return {message:'Error has occurred! Please, try again.', status:400};
                }
            } else if(/^select/.test(sqlQuery)) { // checks the pattern for select operation
                if(res.data.length > 0) {
                    return res;
                }else {
                    return {status:400};
                }
            }

        })
        .catch(function (error) {
            console.log(error);
            return {code:400};
        });
}

export default axiosHarperReq;