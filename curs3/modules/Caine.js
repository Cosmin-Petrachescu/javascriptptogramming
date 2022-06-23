import { Animal } from "../modules/Animal.js";
class Caine extends Animal {
    caineRau;
    constructor(greutate, rau) {
        super(greutate);
        this.caineRau = rau;
    }
    musca() {
        if (this.caineRau) {
            console.log(`Atentie caine rau.`);
        }
        else {
            console.log(`Acest catel poate bland.`);
        }
    }
}

export { Caine }