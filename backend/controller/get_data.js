const protocol = require('../server/getData')

class Start{
    async infoData(req, res){
        try {
            console.log("req: ", req.body.day)
            if(req.body.day){
                let data = await protocol.getInfoData(req.body.day)
                console.log("data: ", data)
                res.status(200).json({
                    data: data[0],
                    message: 'Элемент успешно get'
                });
            } else {
                console.error('Ошибка при get элемента:', error);
                res.status(500).json({ message: 'Ошибка сервера' });
            }


        } catch (error) {
            console.error('Ошибка при get элемента:', error);
            res.status(500).json({ message: 'Ошибка сервера' });
        }

    }
//     getIntervalData
    async getIntervalData(req, res){
        try {
            if(req.body){
                console.log("req: ", req.body.days)
                let data = await protocol.getIntervalData(req.body.days)
                console.log("data: ", data)
                res.status(200).json({
                    data: data,
                    message: 'Элемент успешно get'
                });
            } else {
                console.error('Ошибка при get элемента:', error);
                res.status(500).json({ message: 'Ошибка сервера' });
            }


        } catch (error) {
            console.error('Ошибка при get элемента:', error);
            res.status(500).json({ message: 'Ошибка сервера' });
        }

    }
}

module.exports = new Start();
