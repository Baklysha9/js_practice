window.Human = class Human {
    constructor(name, surname, weight, height) {
        if (typeof name === 'string' && typeof surname === 'string' && 
            typeof weight === 'number' && typeof height === 'number') {

            this.name = name;
            this.surname = surname;
            this.weight = weight;
            this.height = height;
        }
    }
}
window.Man = class Man extends window.Human{
    constructor(name, surname, weight, height, isProgrammer) {
        super(name, surname, weight, height);
        if (typeof isProgrammer === 'boolean') {
            this.isProgrammer = isProgrammer;
        }
    }
    deleteClass() {
        delete window.Human;
    }
 }

 let h = new Human('Вася', 'Пупкин', 100, 180);
 console.log(h);
 let m = new Man('Вася', 'Пупкин', 100, 180, true);
 m.deleteClass();
 let h2 = new Human('Вася', 'Пупкин', 100, 180);
 console.log(h2);

 

