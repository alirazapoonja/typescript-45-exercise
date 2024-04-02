import { features } from "process";

function storeCarInfo(manfacturer: string, modelName: string, ...extraOption:{ [key : string] : any } []):
Object {

    const carInfo = {
        manfacturer, 
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo 
};

storeCarInfo('Honda', 'Civic', {color: 'black'}, {features: ['Navigation', 'Power window']} )

let answare = storeCarInfo('Honda', 'Civic', {color: 'black'}, {features: ['Navigation', 'Power window']})

console.log (answare);


