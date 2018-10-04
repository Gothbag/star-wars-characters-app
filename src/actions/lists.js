export const listActions = {
    ADD_LIST_ELEMENT: "lists/elements/add",
    SET_LIST_ELEMENTS: "lists/elements/set",
    SET_LIST_FILTER_VALUE: "lists/filter/setValue",
    SET_LIST_FOCUS: "lists/focus/set"
};

export const setElements = (elements, listId) => ({
    type: listActions.SET_LIST_ELEMENTS,
    payload: elements,
    listId
});

export const addElement = (element, id, listId) => ({
    type: listActions.ADD_LIST_ELEMENT,
    payload: element,
    id,
    listId
});
 
export const setFilterValue = (value, listId) => ({
    type: listActions.SET_LIST_FILTER_VALUE,
    value,
    listId
});

export const setFocus = (element, listId) => ({
    type: listActions.SET_LIST_FOCUS,
    payload: element,
    listId
});
