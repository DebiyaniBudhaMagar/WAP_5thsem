import Cat from "./Blogs/Cat"
import Dog from "./Blogs/Dog"
import Lion from "./Blogs/Lion"
import Home from "./Blogs/Home"
import { Route, Routes } from "react-router-dom"

export default function Section(){
    return(
        <>
            <section>
                <Routes>
                    <Route path="/Dog" element={<Dog title={'Dog Blog'} />} />
                    <Route path="/Cat" element={<Cat title={'Cat Blog'} />} />
                    <Route path="/Lion" element={<Lion title={'Lion Blog'} />} />
                    <Route path="/" element={<Home title= {'Home page'}/>} />
                </Routes>
            </section>
        </>
    )
}
