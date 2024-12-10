function Signout(){
    return(
        <>
         <body className="signout"> 
            <div class="sign-out-form"> 
                <h2>Sign Out</h2> 
                <form> 
                    <div class="form-group"> 
                        <label for="email">Email:</label> 
                        <input type="email" id="email" name="email" required/> 
                    </div> 
                    <button type="submit" class="btn">Sign Out</button> 
                </form> 
            </div> 
        </body>
        </>
    )
}
export default Signout