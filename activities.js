const students = [
{ name:"aline" , score: 91 },

{ name: "eric", score: 47 },
{ name: "grace", score: 76 },
{name:"jean", score: 58 },
{ name:"diana", score: 83 },
];
let total = 0;
let passed = 0;
let best = students[0];
for (const s of students) {
let grade;
if (s.score = 80) grade = "a";
else if (s.score= 70) grade ="B";
else if (s.score = 60) grade = "c";
else if (s.score= 50) grade = "d";
else grade = "f";


if (s.score = 50) passed++;
if (s.score >best.score) best = s;
total += s.score;
console.log(`${s.name.padEnd(6)} ${s.score} ${grade}`);
}
const average = total / students.length;
console.log("-------------------");
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Passed: ${passed}/${students.length}`);
console.log(`Top student: ${best.name} (${best.score})`);