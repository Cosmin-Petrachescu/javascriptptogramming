class Carte {
    constructor(titlu, autor, editura, anAparitie, pret, nrPagini) {
        this.titlu = titlu;
        this.editura = editura;
        this.anAparitie = anAparitie;
        this.pret = pret;
        this.nrPagini = nrPagini;
    }
    afiseazaTitlu() {
        console.log(`Titlu este ${this.titlu}`);
    }
    
}