const pool = require('./config').pool();

class BD{
    async createPrice(data = {}, time = {}) {
        try{
            const {price, pricesLow, pricesHigh} = data
            const { dataTo, dataFrom } = time
            const [result] = await pool.execute(
                'INSERT INTO tprices (price, pricesLow, pricesHigh, dataTo, dataFrom) VALUES (?, ?, ?, ?, ?)',
                [price, pricesLow, pricesHigh,  dataTo, dataFrom]
            );
            return result
        } catch(ERROR){
            console.log(ERROR)
        }

    }

    async getInfo(data = ''){
        try{
            const [result] = await pool.execute(
                'SELECT * FROM tprices WHERE dataTo = ?',
                [data]
            );
            console.log("From info bd: ", result)
            return result
        } catch(ERROR){
            console.log(ERROR)
        }
    }
    async getInterval(data = []){
        try{
            console.log("getInterval data", data)
            const [start, end] = data
            const [result] = await pool.execute(
              ` SELECT * 
              FROM tprices 
              WHERE STR_TO_DATE(dataTo, '%a, %d %b %Y %H:%i:%s GMT') 
              BETWEEN STR_TO_DATE(?, '%a, %d %b %Y %H:%i:%s GMT') 
              AND STR_TO_DATE(?, '%a, %d %b %Y %H:%i:%s GMT')
              `,
                [start, end]
            );
            console.log("From info interval bd: ", result)
            return result
        } catch(ERROR){
            console.log(ERROR)
        }
    }

}

module.exports = new BD()
