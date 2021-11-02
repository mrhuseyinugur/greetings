function myFunction(){

    let userInput = prompt("Please enter your name");
    var result = userInput.replace(/([A-Z])/g, " $1");
    var person = result.charAt(0).toUpperCase() + result.slice(1);

    let greetings = document.querySelector("#greetings");
    let button = document.querySelector("#main-btn");
    let user = document.querySelector("#user-name");
    
    if(person!=null){   
        greetings.classList.remove("hide");
        button.classList.add("hide");
        user.innerHTML = `${person}! `;
    } else{
        alert("Please enter your name");
    }
}
    