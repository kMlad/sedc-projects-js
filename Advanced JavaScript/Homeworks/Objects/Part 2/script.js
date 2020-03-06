function Person(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => console.log(`${this.firstName} ${this.lastName}`);    
}
function Student (firstName, lastName, age, academyName, studentId)
{
    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => console.log(`The student ${this.firstName} is studying in ${this.academyName}`);    
}

Student.prototype.studentOf = function() 
{
    console.log(`This student studies at the Academy: ${this.academyName}`);
} 
// WheeledVehicle.prototype.stop = function(){
// 	console.log(`The vehicle ${this.name} stopped.`);
// }


function DesignStudent (firstName, lastName, age, academyName, studentId, isStudentOfTheMonth, attendAdobeExam)
{
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyName = "Design Academy";
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = attendAdobeExam;
}
function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject)
{
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyName = "Code Academy";
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = (type) => 
    {
        if(type.toLowerCase()==="group")
        {
            this.hasGroupProject=true;
            console.log("Working on a group project!");            
        }
        if(type.toLowerCase()==="individual")
        {
            this.hasIndividualProject=true;
            console.log("Working on an individual project!");            
        }
    }
}
function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart)
{
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyName = "Network Academy";
    this.academyPart = academyPart;
    attendCiscoExam = () => console.log(`The student ${this.firstName} is doing a cisco exam.`);
    
}



let studentA = new DesignStudent("Pero", "Kockarot", 21, "SEDC", 69, false, false);
let studentB = new CodeStudent("Sale", "Zajakot", 22, "SEDC", 444, true, false);
let studentC = new NetworkStudent("Vlado", "Patkata", 3, "SEDC", 223305, 2);

let bob = new Person("Pero", "Zdero", 2);
// studentA.studentOf(); // StudentA.studentOf is not a functon ?!?!?!!?
studentA.studentOf();

console.log(studentA);
console.log(studentB);
console.log(studentC);





// car.stop(); // the car Yugo stopped.



