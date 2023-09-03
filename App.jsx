import { BrowserRouter, Route, Routes } from "react-router-dom"
import Modal from "./Components/Assets/Modal/Modal"
import { useState } from "react"
import Header from "./Components/Header/Header"
import MainContainer from "./Components/Main/MainContainer"

const App = () => {
    return (
        <>  
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route
                        path="/"
                        element={<MainContainer/>}
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App