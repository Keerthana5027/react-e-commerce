function Signin() {
    return(
        <>
        <body class="sign">
           <div class="sign-in-form"> 
            <h2>Sign In</h2> 
            <form> 
                <div class="form-group"> 
                    <label for="email">Email:</label> 
                    <input type="email" id="email" name="email" required/> 
                </div> 
                <div class="form-group"> 
                    <label for="password">Password:</label> 
                    <input type="password" id="password" name="password" required/>
                </div> 
                <button type="submit" class="btn">Sign In</button> 
            </form>  
          </div>  
        </body>       
        </>
    )
}
export default Signin