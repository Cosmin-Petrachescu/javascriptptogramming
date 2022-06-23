import { Animal } from "../modules/Animal.js";
import { Leu } from "../modules/Leu.js";
import { Caine } from "../modules/Caine.js";

const animal = new Animal(100);
animal.comunica("Mac Mac");

const leu = new Leu(200, 2);
leu.comunica("Hrrr");

const caine = new Caine(3, true);
caine.comunica("Ham Ham");
caine.musca();