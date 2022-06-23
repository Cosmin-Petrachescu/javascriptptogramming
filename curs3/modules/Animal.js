class Animal {
    #familie;
    #mancare;
    #culoare
    greutate;
    static nrPicioare = 2;
    static nrOchi = 2;
    constructor(greutate) {
        this.greutate = greutate;
    }
    get greutate() {
        return this.greutate;
    }
    set greutate(greutate) {
        this.greutate = greutate;
    }
    get familie() {
        return this.#familie;
    }
    set familie(familie) {
        this.#familie = familie
    }
    get mancare() {
        return this.#mancare;
    }
    set mancare(mancare) {
        this.#mancare = mancare;
    }
    get culoare() {
        return this.#culoare;
    }
    set culoare(culoare) {
        this.#culoare = culoare;
    }
    mancare(calorii) {
        this.greutate = this.greutate + calorii
        console.log(`Caloriile consumate astazi ${calorii} si greutatea actuala este ${this.greutate}`);
    }
    doarme(ore) {
        console.log(`Animalul doarme ${ore} intr-o zi`);
    }
    comunica(mesaj) {
        console.log(mesaj)
    }
}

export { Animal }