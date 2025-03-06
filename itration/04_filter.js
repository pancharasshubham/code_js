// use of filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums =  myNums.filter( (num) => num > 4 )
// console.log(newNums);            // [ 5, 6, 7, 8, 9, 10]

// example of explicit return 

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums1 =  myNums.filter( (num) => {
    // num > 4                                                    // []
    return num > 4                                          // when you add {}-parenthisis you have to write return keyword
} )
// console.log(newNums1);

// condition with for-each loops
const numbers = []

myNums1.forEach( (num) => {
    if(num > 4){
        numbers.push(num)                                  // [5, 6, 7, 8, 9, 10]
    }
})

// console.log(numbers);

// real-life example of loops on array

const salaarData = [
    { character: "Deva", role: "Warrior", allegiance: "Kaapar Clan", dob: "10-05-1985" },
  { character: "Varadha", role: "Prince", allegiance: "Khansaar Royalty", dob: "15-08-1987" },
  { character: "Vardha's Father", role: "King", allegiance: "Khansaar Royalty", dob: "20-07-1960" },
  { character: "Bharghav", role: "Antagonist", allegiance: "Rival Faction", dob: "30-11-1982" },
  { character: "Radha Rama", role: "Love Interest", allegiance: "Khansaar Royalty", dob: "12-02-1990" },
  { character: "Mani", role: "Loyal Friend", allegiance: "Kaapar Clan", dob: "25-06-1986" },
  { character: "Samrat", role: "War General", allegiance: "Khansaar Army", dob: "18-09-1975" },
  { character: "Jeeva", role: "Spy", allegiance: "Rival Faction", dob: "05-12-1983" }
  ];

let allegianceData = salaarData.filter( (clan) => clan.allegiance === "Khansaar Royalty")

// console.log(allegianceData);

const character_DOB = salaarData.filter( (char) => {
    const year = parseInt(char.dob.split("-")[2]); // Extract year from DOB
    return year > 1982 && char.allegiance === "Khansaar Royalty";
})

console.log(character_DOB);