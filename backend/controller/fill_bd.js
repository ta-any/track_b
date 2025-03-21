const protocol = require('../server/fillBD')

class Start{
    async start(req, res){
        try {
            await protocol.start(100)
            res.status(200).json({ message: 'Элемент успешно fill'});

        } catch (error) {
            console.error('Ошибка при change элемента:', error);
            res.status(500).json({ message: 'Ошибка сервера' });
        }

    }
}

module.exports = new Start();