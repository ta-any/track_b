const repo = require("../repositories/API")
const repoBD = require("../repositories/basedate")
// const method = require('./protocol.js')

class fillBD {
    async start(limit){
        try {
            await repo.getPriceLimit(limit).then(async data => {
                if (data) {
                    const result = data.Data.Data
                    console.log("price result API", result)

                    for (let item of result) {
                        const time = {
                            dataTo: new Date(item.time * 1000).toUTCString(),
                            dataFrom: new Date(item.time * 1000).toUTCString()
                            // time: new Date(result.Data[0].time * 1000).toUTCString()
                        }

                        const count = {
                            price: (Number(item.high) + Number(item.low)) / 2,
                            pricesLow: Number(item.low),
                            pricesHigh: Number(item.high)
                        }

                        console.log("time", time)
                        console.log("count", count)
                        await repoBD.createPrice(count, time)
                    }
                }
            });


        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new fillBD()