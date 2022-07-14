// use async when we handle things outside the app
export const signUp = async (username, email, password, setter) => {
    try {
       const response = await fetch("http://localhost:5001/user", {
       // HTTP verb 
       method: "POST",
        // sending JSON data instructions 
       headers: {"Content-Type": "application/json"},
        //  body that has been turned into JSON with stringify
       body: JSON.stringify({
            username, 
            email, 
            password}),
       });
       const data = await response.json();
       setter(data.user.username);
       console.log(data);
    } catch (error) {
        console.log(error);
    };
};