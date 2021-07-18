import axios from 'axios'

let FINANCIAL_TRANSFERS_URL = "http://localhost:8082/api_financial_transfers";

class UserDataService {

    createScheduling(scheduling){
        return axios.post(`${FINANCIAL_TRANSFERS_URL}/scheduling`, scheduling);
    }

    getSchedulings(){
        return axios.get(`${FINANCIAL_TRANSFERS_URL}/scheduling`);
    }

    cleanSchedulings(){
        return axios.delete(`${FINANCIAL_TRANSFERS_URL}/scheduling`);
    }
}

export default new UserDataService()