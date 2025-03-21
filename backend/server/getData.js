const repo = require("../repositories/API")
const repoBD = require("../repositories/basedate")

class getData {
    async getPriceBD(){
        try {
             await repo.getPriceLimit(1).then(async data => {
                if (data) {
                    const result = data.Data
                    console.log("price result API", result)

                    const time = {
                        dataTo: new Date(result.Data[1].time * 1000).toUTCString(),
                        dataFrom: new Date(result.Data[1].time * 1000).toUTCString()
                        // time: new Date(result.Data[0].time * 1000).toUTCString()
                    }

                    const count = {
                        price: (result.Data[1].high + result.Data[1].low) / 2,
                        pricesLow: Number(result.Data[1].low),
                        pricesHigh: Number(result.Data[1].high)
                    }

                    console.log("time", time)
                    console.log("count", count)
                    await repoBD.createPrice(count, time)

                }
            });


        }catch (e) {
            console.log(e)
        }
    }
    async getInfoData(data = ''){
        try {
            console.log("From getInfoData: ", data)
            if(data){
                const date = new Date(data);
                // Проверяем, что дата валидна
                if (isNaN(date.getTime())) {
                    return new Error('Неверный формат даты');
                }
                console.log("From check getInfoData: ", data)
                return await repoBD.getInfo(data)
            }

        }catch (e) {
            console.log(e)
        }
    }
    // getInterval
    async getIntervalData(data = []){
        try {
            console.log("From getIntervalData: ", data)
            if(data.length === 2){
                console.log("From check getInfoData: ", data)
                return await repoBD.getInterval(data)
            } else {
                return new Error('Неверный формат даты');
            }

        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new getData()