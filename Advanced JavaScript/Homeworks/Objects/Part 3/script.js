class Animal
{
    constructor(name, type, age, size)
    {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat = (animal) => 
    {
        if(animal.constructor.name==="Animal" && this.type==="herbivore")
        {
            console.log(`The ${this.name} is a herbivore and does not eat other animals.`);            
        }
        if(animal.constructor.name ==="Animal" && this.type!=="herbivore")
        {
            console.log(`The ${this.name} ate the ${animal.name}`);
            animal.isEaten = true;            
        }
        if(animal.constructor.name ==="Animal" && this.size<animal.size*2)
        {
            console.log(`The ${this.name} tried to eat ${animal.name}, but it was too big!`);            
        }
        if(animal.constructor.name !=="Animal")
        {
            console.log(`The ${this.name} is eating`);            
        }
    }
}

let Leo = new Animal("Lion", "carnivore", 12, 200);
let Gazzy = new Animal("Gazelle", "herbivore", 4, 100);
Leo.eat(Gazzy);