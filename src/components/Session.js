import Header from "./header"
import Footer from "./Footer"
import Product from "./Product"
import { Outlet } from "react-router-dom"

function Session(){
    return(        
       <>        
       <Header/>       
        <section>
            <Outlet />
        </section>
        <Footer/>
        </> 
    )  
}
export default Session