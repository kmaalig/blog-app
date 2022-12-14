import CreateView from "../createView.js"
import createView from "../createView.js";

export default function Register(props) {
    if(isLoggedIn()) {
        createView("/");
        return;
    }

    return `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Register</title>
            </head>
            <body>
                <h1>Register</h1>
        
                <form id="register-form">
                    <label for="username">Username</label>
                    <input id="username" name="username" type="text"/>
                    <label for="email">Email</label>
                    <input id="email" name="email" type="email">
                    <label for="password">Password</label>
                    <input id="password" name="password" type="password"/>
                    <button id="register-btn" type="button">Register</button>
                </form>
            </body>
        </html>
`;
}

// US5-C: Register the User Client-Side
export function RegisterEvent(){
   const registerBTN = document.querySelector("#register-btn");
   registerBTN.addEventListener("click", function (e) {

       const usernameField = document.querySelector("#username");
       const emailField = document.querySelector("#email");
       const passwordField = document.querySelector("#password");

        let newUser = {
            username: usernameField.value,
            email: emailField.value,
            password: passwordField.value
        }

        let request = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
        }

        fetch(USER_API_BASE_URL + "/create", request)
            .then(response => {
                console.log(response.status);
                CreateView("/");
            })
    })
}