import {DECREMENT, INCREMENT} from "./const";

export  default function CountReducer(pre=0, action) {
    const {type, value} = action;
    switch (type) {
        case INCREMENT:
            return pre + value;
        case DECREMENT:
            return pre - value;
        default:
            return pre;
    }
}