import client from './lib/client';

let instance = null;

module.exports = {
    instance (options) {
        if(!instance){
            instance = new client(options);
        }
        return instance;
    }
};
