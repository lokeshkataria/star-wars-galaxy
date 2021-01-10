export const setItem = (itemName, itemValue) => {
    localStorage?.setItem(itemName, itemValue);
}

export const getItem = (itemName) => {
    return localStorage?.getItem(itemName);
}