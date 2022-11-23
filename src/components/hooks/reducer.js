 export const reduce =  (state, {type, payload}) => {
    switch (type) {
        case "plus":
        return {count: state.count +1 };
        case "minus":
        return {count: state.count -1 };
        case "byamount":
        return {count: state.count + payload };
            
        default: return state;
    }
    
    
};
