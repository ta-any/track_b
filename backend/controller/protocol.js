const protocol = require('../server/getData')

export const getPrice = () => {
    return protocol.getPriceBD();
};


