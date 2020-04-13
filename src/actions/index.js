import { v4 as uuidv4 } from 'uuid';
export const removeItemAction = ( itemType, id ) => {
    return {
        type: "REMOVE_ITEM",
        payload: {
            itemType,
            id,
        }
    }
};

export const addItemAction = ( itemType, itemContent ) => {
    return {
        type: "ADD_ITEM",
        payload: {
            itemType,
            itemContent,
            item: {
                id: uuidv4(),
                ...itemContent,
            },

        }
    }
};