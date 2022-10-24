const zFighters = [
  { name: "Goku", powerLevel: 9001, race: "Saiyan" },
  { name: "Gohan", powerLevel: 981, race: "Saiyan" },
  { name: "Piccolo", powerLevel: 3500, race: "Namekian" },
  { name: "Krillin", powerLevel: 1770, race: "Human" },
  { name: "Tien", powerLevel: 1830, race: "Human" },
  { name: "Yamcha", powerLevel: 1480, race: "Human" },
  { name: "Chiaotzu", powerLevel: 610, race: "???" },
];

const villains = [
  { name: "Saibamen", powerLevel: 1200, race: "Plant" },
  { name: "Nappa", powerLevel: 4000, race: "Saiyan" },
  { name: "Vegeta", powerLevel: 18000, race: "Saiyan" },
];
// for (let i = 0; i <= zFighters.length; i++) {
//   let hero = zFighters[i];
//   for (let i = 0; i <= villains.length; i++) {
//     let villain = villains[i];
//     if (hero.powerLevel > villain.powerLevel) {
//       console.log(hero.name, "is able to defeat", villain.name);
//     } else {
//       console.log(hero.name, "is not able to defeat", villain.name);
//       break;
//     }
//   }
// }

let counter = 0;
let total = 0;

for (let i = 0; i <= zFighters.length; i++) {
  total += zFighters[i].powerLevel;
  counter++;
  if (counter == zFighters.length) {
    console.log(Math.round(total / zFighters.length));
  }
}
