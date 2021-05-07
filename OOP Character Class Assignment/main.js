//OOP Character Class Assignment
"use strict";
//Task 1
class Character {
    //Properties (State)
    constructor(name, phrase1, phrase2) {
        this.name = name;
        this.phrase1 = phrase1;
        this.phrase2 = phrase2;
        this.level = 0;
    }

    //Methods (Behaviour)
    speak(phraseNum) {
        switch(phraseNum) {
            case 1:
                console.log(this.phrase1);
                break;
            case 2:
                console.log(this.phrase2);
                break;
        }
    }

    setLevel(newLevel) {
        if (newLevel > 0) {
        this.level = newLevel;
        console.log(this.level);            
        } 
    }
}
//Task 2 
let panda = new Character("Kung-fu Panda", "Skadoosh", "You have been blinded by pure awesomeness!");
let spiderman = new Character("Spiderman","My Spider-Sense is tingling","Your friendly neighbourhood spiderman.");
//Task 3
spiderman.speak(1);
spiderman.setLevel(2);
panda.speak(2);
