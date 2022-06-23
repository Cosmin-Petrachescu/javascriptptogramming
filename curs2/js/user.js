class User {
    static nr_piciore = 2;
    constructor(n, e, v) {
        this.nume = n;
        this.email = e;
        this.varsta = v;

    }
    salut() {
        console.log(`Salut, numele meu este ${this.nume} si am ${this.varsta} ani`);
        console.log('Salut, numele meu este ' + this.nume + ' si am ' + this.varsta + ' ani');

    }

    static merge(nr_pasi) {
        console.log(` Toti utilizatori au mers azi ${nr_pasi} cu cele ${User.nr_piciore} picioare`)
    }

}



let user = new User("Cosmin", "b00190588t@gmail.com", 33)
let user2 = new User("Dan", "dan@dan.ro", 21);
console.log(user);
console.log(user2);
user.varsta = 32;
console.log(user);
user.salut();
User.merge(8000);
User.nr_piciore = 3;
User.merge(3000);
user2.salut();
