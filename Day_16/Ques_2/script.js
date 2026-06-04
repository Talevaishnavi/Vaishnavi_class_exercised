const button = document.getElementById("btn");

button.addEventListener("click", function(){

    fetch("https://randomuser.me/api/")

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        const user = data.results[0];

        document.getElementById("result").innerHTML = `

            <img src="${user.picture.large}">

            <h2>${user.name.first} ${user.name.last}</h2>

            <p>Email: ${user.email}</p>

        `;

    })

    .catch(function(error){

        console.log("Error:", error);

    });

});