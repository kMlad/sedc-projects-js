function Academy(name, startDate, endDate, students=[], subjects=[])
{
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.students = students;
    this.subjects = subjects;
    this.numberOfClasses = subjects.length*10;
    this.printStudents = () =>   
    {
        for (const student of this.students) {
            console.log(student);            
        }
    }
    this.printSubjects = () => 
    {
        for (const subject of this.subjects) {
            console.log(subject);            
        }
    }
    this.addSubject = sub =>
    {
        this.subjects.push(sub);
        sub.academy=this;
    }

}

function Subject(title, isElective, academy="none", students=[])
{
    this.title = title;
    this.isElective = isElective;
    this.numberOfClasses = 10;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function(n) 
    {
        if(n<3)
        return 10;
        else return n;
    }
}

function Student(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.academy = null;
    this.completedSubjects = [];
    this.currentSubject = null;
    this.startAcademy = function(academy) 
    {
        this.academy = academy;
        academy.students.push(this);
    }
    this.startSubject = subject => 
    {
        if(this.academy===subject.academy)
        {
            if(this.currentSubject!==subject)
            {
                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = subject;
            }
            subject.students.push(this);
        } 
        else console.log("Error");
    }
       
}

let bob = new Student('Bob', 'Bobski', 19);
let ajs = new Subject('Advanced JavaScript', false);
let sedc = new Academy('Seavus Code Academy', "15.10.19", "15.10.20");

sedc.addSubject(ajs);
bob.startAcademy(sedc);
bob.startSubject(ajs);
console.log(bob.academy);
console.log(bob.currentSubject);
sedc.printStudents();
sedc.printSubjects();





//Instantiate a Student, a Subject and an Academy.
//override methods to their newer, more complex functionality



