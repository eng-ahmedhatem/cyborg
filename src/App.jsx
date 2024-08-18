import React from "react"
import { Header , Main , Footer} from "./Sections/index"
import { Home , Browse, Details , Streams , Profile} from "./Pages/index"
import { BrowserRouter , Routes ,Route } from "react-router-dom"
let App = ()=>{
    return(
        <>
        <BrowserRouter >
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/browse" element={<Browse/>}/>
                    <Route path="/details" element={<Details/>}/>
                    <Route path="/streams" element={<Streams/>}/>
                    <Route path="/profile" element={<Profile/>}/>

                </Routes>
            </Main>
            <Footer/>  
        </BrowserRouter>
        </>
    )
}
export default App