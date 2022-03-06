export  default function CountReducer(pre=0, action) {
    const {type, value} = action;
    switch (type) {
        case 'increment':
            return pre + value;
        case 'decrement':
            return pre - value;
        default:
            return pre;
    }
}