import React from 'react'

class Login extends React.Component{
    render(){
        return(
            <form>
                <input name="username" placeholder="Username"></input>
                <input name="password" placeholder="Password"></input>
                <input type="button" className="Login" value="Login"></input>
                <input type="button" className="Signup" value="Sign Up"></input>
            </form>
        )
    }
}

export default Login