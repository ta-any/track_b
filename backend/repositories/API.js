const axios  = require('axios');

class API {
    async getCurrentPrice() {
        try {
            const response = await axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=1');
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
            console.log('ERROR');
            return null;
        }
    };
    async getPriceLimit(limit) {
        try {
            const response = await axios.get(`https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=${limit}`);
            console.log(response.data);
            return response.data;
        } catch (err) {
            console.error(err);
            console.log('ERROR');
            return null;
        }
    };
}

module.exports = new API();






