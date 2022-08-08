// generate random numbers

let randomNumber1 = Math.floor(Math.random() * 7);

let randomNumber2 = Math.floor(Math.random() * 7);

let randomNumber3 = Math.floor(Math.random() * 7);


// messages

const generate1 = () => {
  const message1 = randomNumber1;
  switch (message1) {
    case 0:
      return "Mike";
    case 1:
      return "Jennifer";
    case 2:
      return "Oliver";
    case 3:
      return "Niklas";
    case 4:
      return "Sevil";
    case 5:
      return "Robin";
    case 6:
      return "Roland";
    default:
      return "Fehler";
  }
};

const generate2 = () => {
  const message2 = randomNumber2;
  switch (message2) {
    case 0:
      return "Felsberg";
    case 1:
      return "Berlin";
    case 2:
      return "Hamburg";
    case 3:
      return "Mannheim";
    case 4:
      return "Düsseldorf";
    case 5:
      return "Frankfurt";
    case 6:
      return "Duisburg";
    default:
      return "Fehler";
  }
};

const generate3 = () => {
  const message3 = randomNumber3;
  switch (message3) {
    case 0:
      return "Flag Football";
    case 1:
      return "Fußball";
    case 2:
      return "Basketball";
    case 3:
      return "Tennis";
    case 4:
      return "Baseball";
    case 5:
      return "Golf";
    case 6:
      return "Football";
    default:
      return "Fehler";
  }
};


// combine messages

function generate() {
  alert(`Hi, meine Name ist ${generate1()}, ich komme aus ${generate2()} und in meiner Freizeit, spiele ich ${generate3()}.`);
}