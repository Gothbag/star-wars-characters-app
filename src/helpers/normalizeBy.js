import { getIdFromUrl } from "./getHelpers";

export const normalizeBy = (values, field = "name") => values.reduce((normalizedObject, currentVal) => {
    const id = getIdFromUrl(currentVal.url);
    normalizedObject[id] = currentVal[field];
    return normalizedObject;
}, {});
