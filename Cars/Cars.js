"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manfacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manfacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
let answare = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answare);
