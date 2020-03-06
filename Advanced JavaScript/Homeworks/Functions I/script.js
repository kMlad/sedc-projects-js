//variable declaration and initialization
let tableHead = document.getElementById("thd");
let tableBody = document.getElementById("tbd");
let btn = document.getElementById("btn");
let table = document.getElementById("data");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
const cache = [null];
let ctr = 1;

//initialize web page load
(function ()
{
    table.classList.add("passive");
    next.classList.add("passive");
    prev.classList.add("passive");
    cache.push("https://swapi.co/api/planets/?page=1");
    
})();


//btn click
btn.addEventListener("click", () => 
{
    fetch(cache[ctr]).
    then((response) => response.json())
    .then((response) => 
    {
        fillTablePlanets(response);
    });
});
//next click
next.addEventListener("click", () => {
    fetch(cache[++ctr]).
    then((response) => response.json()).
    then((response) => fillTablePlanets(response));
});
//prev click
prev.addEventListener("click", () => {
    fetch(cache[--ctr]).
    then((response) => response.json()).
    then((response) => fillTablePlanets(response));
});

function fillTablePlanets(data) {
    
    //empty the table
    tableHead.innerHTML = "";
    tableBody.innerHTML = "";

    //manipulate prev/next button display & show table
    table.classList.remove("passive");
    prev.classList.remove("passive");
    next.classList.remove("passive");
    if(ctr===1)
    {
        next.classList.remove("passive");
        prev.classList.add("passive");        
    }
    if(ctr===2)
    {
        prev.classList.remove("passive");
        next.classList.add("passive"); 
    }

    //manage cache
    for(i=0; i<cache.length; i++)
    {
        if(data.next===cache[i])
            break;
        else if(i===cache.length-1)
            cache.push(data.next);

             
    }

    //print thead data
    tableHead.innerHTML =
    ` <tr>
        <td> Planet Name </td>
        <td> Population </td>
        <td> Climate </td>
        <td> Gravity </td>        
    </tr>
    `;
    //print tbody data
    for (item of data.results) {
        tableBody.innerHTML +=
        `
        <tr>
            <td> ${item.name} </td>
            <td> ${item.population}</td>
            <td> ${item.climate}</td>
            <td> ${item.gravity}</td>
        </tr>
        `
    }
}    