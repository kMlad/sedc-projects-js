let table = document.getElementById("data-table");

//when the button is clicked
document.getElementById("btn").addEventListener("click", function()
{
    //get data from API
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(function(list)
    {
        //add a border to the table
        table.setAttribute("border", "1");
        
        //Add a thead
        table.innerHTML = 
        `
        <thead>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td>email</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Website</td>
            </tr>
        </thead>
        <tbody>
        `
        //print all user data
        for (const user of list) 
        {
            table.innerHTML += 
            `
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.address.street} ${user.address.suite}, ${user.address.city} </td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
            `
        }
        //close the tbody
        table.innerHTML += `</tbody>`
        
    });
});


