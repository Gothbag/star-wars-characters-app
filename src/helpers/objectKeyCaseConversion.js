import { camelCase } from "lodash";

const objectKeyCaseConversion = (o, method) => {
    if (o === null || o === undefined) {
        return o;
    } else if (Array.isArray(o)) {
        return o.map(o => objectKeyCaseConversion(o,method));
    }
    return typeof o !== 'object' ? o : Object.keys(o).reduce((prev, current) => {
        const newKey = method(`${current}`);
        if (typeof o[current] === 'object') {
            prev[newKey] = objectKeyCaseConversion(o[current],method);
        } else {
            prev[newKey] = o[current];
        }    
        return prev;
    }, {});
};

export const objToCamel = o => objectKeyCaseConversion(o, camelCase);
