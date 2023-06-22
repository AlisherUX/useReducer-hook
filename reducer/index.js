export function reducer(state, action) {
    switch (action.type) {
        case "INC":
            state += 1;
            localStorage.getItem("count", state);
            return state;
        case "DEC":
            state -= 1;
            localStorage.getItem("count", state);
            return state;
        case "RES":
            state = 0;
            localStorage.removeItem("count");
            return state;
        case "MUL":
            state *= 2;
            localStorage.removeItem("count");
            return state;
    
        default:
            return state;
    }
}

