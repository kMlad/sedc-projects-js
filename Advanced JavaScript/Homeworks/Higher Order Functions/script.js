let url = "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g4/Class6/Homework/students.json";

async function getData(url)
{
    let response = await fetch(url);
    let data = await response.json();
    
    console.table(gradeHigherThan3(data));    
    console.table(excellentFemaleStudents(data));
    console.table(legalMalesInSkopje(data));
    console.log(avgGradesOfFemalesOlderThan24(data));
    console.table(malesWithBAndAreZlatnaSredina(data)); 
}
getData(url);

//functions
function gradeHigherThan3 (students)
{
    return students.filter(student => student.averageGrade>3);
}

function excellentFemaleStudents (students)
{
    return students.filter(({gender}) => gender==="Female").filter(({averageGrade}) => averageGrade===5);
}

function legalMalesInSkopje(students)/* hehe */
{
    return students.filter(({city}) => city==="Skopje").filter(({age}) => age>=18).filter(({gender}) => gender==="Male").map(student => student.firstName);
}

function avgGradesOfFemalesOlderThan24(students)
{
    return students.filter(({age}) => age>24).filter(({gender}) => gender==="Female").map(student => student.averageGrade);
}

function malesWithBAndAreZlatnaSredina(students)
{
    return students.filter(({averageGrade}) => averageGrade>2).filter(({gender}) => gender==="Male").filter(({firstName}) => firstName[0]==="B");
}