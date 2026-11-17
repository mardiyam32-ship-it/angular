
import { Component } from '@angular/core';

type Alumne = {
  nom: string;
  edat: number;
  email: string;
};

type Employee = {
  name: string;
  salary: number;
};

@Component({
  selector: 'app-exercicis',
  standalone: true,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class ExercicisComponent {

  resultat: string = '';

  // EXERCICI 1
  exercici1() {
    let dni: string = "12345678A";
    this.resultat = "DNI: " + dni;
  }

  // EXERCICI 2
  exercici2() {
    const PI: number = 3.1416;
    let radi: number = 5;
    let area: number = PI * radi * radi;

    this.resultat = "Àrea del cercle: " + area;
  }

  // EXERCICI 3
  exercici3() {
    let nom = prompt("Com et dius?");
    this.resultat = "Hola " + nom;
  }

  // EXERCICI 4
  exercici4() {
    let a: number = Number(prompt("Primer número?"));
    let b: number = Number(prompt("Segon número?"));

    let suma: number = a + b;
    this.resultat = "La suma és: " + suma;
  }

  // EXERCICI 5
  exercici5() {
    const PI: number = 3.1416;
    let radi: number = Number(prompt("Introdueix el radi:"));
    let area: number = PI * radi * radi;

    this.resultat = "Àrea: " + area;
  }

  // EXERCICI 6
  exercici6() {
    let llargada = Number(prompt("Llargada en cm:"));
    let amplada = Number(prompt("Amplada en cm:"));
    let altura = Number(prompt("Altura en cm:"));

    let volum = llargada * amplada * altura;
    let cost = volum / 5000;

    this.resultat =
      "Llargada: " + llargada + " cm\n" +
      "Amplada: " + amplada + " cm\n" +
      "Altura: " + altura + " cm\n" +
      "Volum: " + volum + " cm³\n" +
      "Cost: " + cost + " €";
  }

  // EXERCICI 7
  exercici7() {
    let edat = Number(prompt("Quants anys tens?"));

    if (edat < 0 || edat > 120 || !Number.isInteger(edat)) {
      this.resultat = "Edat no vàlida!";
    }
    else if (edat > 17) {
      this.resultat = "Pots votar!";
    }
    else {
      this.resultat =
        "Encara no pots votar. Et falten " +
        (18 - edat) + " anys.";
    }
  }

  // EXERCICI 8
  exercici8() {
    let numero = Number(prompt("Introdueix un número:"));

    let resultatIf: number;

    if (numero > 0) {
      resultatIf = 1;
    }
    else if (numero < 0) {
      resultatIf = -1;
    }
    else {
      resultatIf = 0;
    }

    let resultatTernari =
      numero > 0 ? 1 : numero < 0 ? -1 : 0;

    let resultatSwitch: number;

    switch (true) {
      case numero > 0:
        resultatSwitch = 1;
        break;
      case numero < 0:
        resultatSwitch = -1;
        break;
      default:
        resultatSwitch = 0;
    }

    this.resultat =
      "If...else: " + resultatIf + "\n" +
      "Ternari: " + resultatTernari + "\n" +
      "Switch: " + resultatSwitch;
  }

  // EXERCICI 9
  exercici9() {
    let nom = prompt("Introdueix el nom:");

    if (nom === "admin") {
      let password = prompt("Contrasenya:");

      if (password === "password") {
        this.resultat = "Benvingut admin!";
      }
      else {
        this.resultat = "Contrasenya incorrecta!";
      }
    }
    else {
      this.resultat = "Usuari incorrecte!";
    }
  }

  // EXERCICI 10
  exercici10() {
    let secret = Math.floor(Math.random() * 100) + 1;

    while (true) {
      let resposta = prompt(
        "Endevina el número de l'1 al 100 (0 per sortir):"
      );

      if (resposta === null) {
        break;
      }

      let numero = Number(resposta);

      if (
        resposta.trim() === "" ||
        !Number.isInteger(numero) ||
        numero < 0 ||
        numero > 100
      ) {
        alert("Número no vàlid!");
      }
      else if (numero === 0) {
        this.resultat = "Has sortit. El número era: " + secret;
        return;
      }
      else if (numero === secret) {
        this.resultat = "Correcte! Has encertat!";
        return;
      }
      else if (numero < secret) {
        alert("El número és més gran!");
      }
      else {
        alert("El número és més petit!");
      }
    }

    this.resultat =
      "Has cancel·lat el joc. Número secret: " + secret;
  }

  // EXERCICI 11
  exercici11() {
    let numero = Number(prompt("Quina taula vols?"));
    let text = "TAULA DEL " + numero + "\n\n";

    text += "WHILE:\n";
    let i = 0;

    while (i <= 10) {
      text += numero + " x " + i + " = " + (numero * i) + "\n";
      i++;
    }

    text += "\nDO WHILE:\n";
    let j = 0;

    do {
      text += numero + " x " + j + " = " + (numero * j) + "\n";
      j++;
    } while (j <= 10);

    text += "\nFOR:\n";

    for (let k = 0; k <= 10; k++) {
      text += numero + " x " + k + " = " + (numero * k) + "\n";
    }

    this.resultat = text;
  }

  // EXERCICI 12
  exercici12() {
    const fruits: string[] = ["Apple", "Orange", "Plum"];

    let text = "Fruit inicial: " + fruits[0] + "\n";

    fruits[0] = "banana";
    text += "Després de substituir: " + fruits + "\n";

    fruits.push("cirera");
    text += "Després d'afegir cirera: " + fruits;

    this.resultat = text;
  }

  // EXERCICI 13
  exercici13() {
    const xs: number[] = [8, 9, 4, 5, 6, 2, 9, 4, 7, 2, 3];

    let maxim = Math.max(...xs);
    let minim = Math.min(...xs);

    this.resultat =
      "Valor màxim: " + maxim + "\n" +
      "Valor mínim: " + minim;
  }

  // EXERCICI 14
  exercici14() {
    const xs: string[] = [
      "Olivia Anderson",
      "Ethan Carter",
      "Isabella Brooks",
      "Olivia Bennett",
      "Ava Morgan",
      "Noah Mitchell",
      "Mia Harper",
      "Liam Parker"
    ];

    const olivias = xs.filter(persona =>
      persona.startsWith("Olivia")
    );

    this.resultat = olivias.join("\n");
  }

  // EXERCICI 15
  exercici15() {
    const xs: (number | null)[] =
      [8, 9, 4, 5, null, 6, 2, 9, null, 4, 7, 2, 3];

    let suma = 0;
    let comptador = 0;

    for (let nota of xs) {
      if (nota !== null) {
        suma += nota;
        comptador++;
      }
    }

    let mitjana = suma / comptador;

    this.resultat = "La mitjana és: " + mitjana;
  }

  // EXERCICI 16
  exercici16() {
    let user: any = {};

    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.surname;

    this.resultat = JSON.stringify(user);
  }

  // EXERCICI 17
  exercici17() {
    const salaries: any = {
      John: 100,
      Ann: 160,
      Pete: 130
    };

    let result = 0;

    for (let persona in salaries) {
      result += salaries[persona];
    }

    this.resultat = "Suma dels salaris: " + result;
  }

  // EXERCICI 18
  exercici18() {
    let alumne: Alumne = {
      nom: "Mardiya",
      edat: 20,
      email: "mardi@gmail.com"
    };

    this.resultat =
      "Totes les dades:\n" +
      JSON.stringify(alumne) + "\n\n" +
      "Nom: " + alumne.nom.toUpperCase() + "\n" +
      "Edat: " + alumne.edat + "\n" +
      "Email: " + alumne.email;
  }

  // EXERCICI 19
  exercici19() {
    const clase: Alumne[] = [
      {
        nom: "Mardiya",
        edat: 20,
        email: "Mardi@gmail.com"
      },
      {
        nom: "Diya",
        edat: 19,
        email: "Diya@gmail.com"
      }
    ];

    let text = "Accedint a les posicions:\n";
    text += JSON.stringify(clase[0]) + "\n";
    text += JSON.stringify(clase[1]) + "\n\n";

    text += "Utilitzant FOR:\n";

    for (let i = 0; i < clase.length; i++) {
      text += JSON.stringify(clase[i]) + "\n";
    }

    this.resultat = text;
  }

  // EXERCICI 20
  exercici20() {
    function crearEmployee(
      name: string,
      salary: number
    ): Employee {
      return { name, salary };
    }

    const david = crearEmployee("David", 10000);

    this.resultat =
      "Nom: " + david.name + "\n" +
      "Salari: " + david.salary + " €";
  }
}
