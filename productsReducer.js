import { createAction, createReducer } from "@reduxjs/toolkit"

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
    isOpenModal: false,
    wishCandidate: null,
    wishList: []
}

export const setWishCandidate = createAction("products/set-wish-candidate", (idCandidate)=> ({
    payload: idCandidate
}))

export const confirmWish = createAction("products/confirm-wish")
export const cancelWish = createAction("products/cancel-wish")

const productsReducer = createReducer(initialState, (builder) => { 
    builder.addCase(setWishCandidate, (state,action) => { 
        state.wishCandidate = action.payload
        state.isOpenModal = true
    })
    builder.addCase(confirmWish, (state,action)=>{
        state.wishList.push(state.wishCandidate)
        state.isOpenModal = false
    })
    builder.addCase(cancelWish, (state,action)=>{
        state.isOpenModal = false
        state.wishCandidate = null
    })
})

export default productsReducer