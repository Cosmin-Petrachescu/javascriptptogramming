function student(id, name, age, note1, note2) {
    this.id = id;
    this.name = name;
    this.age = age;

    // this.salut = function () {
    //     console.log(`Buna ziua numele meu este ${this.name}`)
    // }
    // this.examen = function () {
    //     this.note1 = parseInt(note1);
    //     this.note2 = parseInt(note2);
    //     console.log(`Am fost la examene`);
    // }
    // this.calMedia = function () {
    //     let media = (this.note1 + this.note2) / 2;
    //     console.log(`Media este ${media}`);
    // }
}
student.prototype.salut = function () {
    console.log(`Buna ziua numele meu este ${this.name}`)
}