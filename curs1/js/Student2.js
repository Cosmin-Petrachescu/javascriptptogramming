class StudentNou {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hello numele meu este ${this.name}`);
    }
    examen(note1, note2) {
        this.note1 = parseInt(note1);
        this.note1 = parseInt(note2);
        console.log(`Am fost la examene`);
    }
    calMedia() {
        let media = (this.note1 + this.note2) / 2;
        console.log(`Media este ${media}`);
    }
}