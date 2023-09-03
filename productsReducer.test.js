import productsReducer from "../../redux/productsReducer";
import { addCase } from "../../redux/productsReducer";

const initialState = { 
    list: [ 
        {
            id: 1,
            name: "Phone",
            price: 200
        },
        {
            id: 2,
            name: "Smartphone",
            price: 300
        },
        {
            id: 3,
            name: "Computer",
            price: 300
        },
        {
            id: 4,
            name: "PS 4",
            price: 400
        },
        {
            id: 5,
            name: "TV",
            price: 500
        },
        {
            id: 6,
            name: "PS 5",
            price: 600
        },
        {
            id: 7,
            name: "Smart TV",
            price: 700
        },
        {
            id: 8,
            name: "Motorcycle",
            price: 1000
        },
    ],
    countList: 8
}
const tempUser = { 
    name: "Car", 
    price: 2000
}

describe("Testing product reducer", () => { 
    it ("Add product to list", () => { 
        const confirmWish = productsReducer(initialState, addCase(tempUser))
        const cancelWish = productsReducer(initialState, addCase(tempUser))
        expect(newState.list.length).toBe(2)
        expect(newState.list[1].name).toBe(tempUser.name)
        expect(newState.countList).toBe(2)
    })
})