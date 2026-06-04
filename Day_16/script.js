fetch("https://jsonplaceholder.typicode.com/users")

.then(function(response){

    return response.json();

})

.then(function(data){

    console.log(data);

    let output = "";

    data.forEach(function(user){

        output += `

            <div class="user">

                <h2>${user.name}</h2>

                <p><strong>Email:</strong> ${user.email}</p>

                <p><strong>City:</strong> ${user.address.city}</p>

            </div>

        `;

    });

    document.getElementById("result").innerHTML = output;

})

.catch(function(error){

    console.log("Error:", error);

});