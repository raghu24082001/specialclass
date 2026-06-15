const frontend = ["HTML", "CSS", "JavaScript"]; 
const backend = ["Node.js", "MongoDB"];

const fullstack = [...frontend,...backend]

console.log(fullstack)

function totalmarks(...input){
   return input.reduce((a,b)=> a+ b)
}

console.log(totalmarks(30,40,50,60))

const names = "Ravi"; 
const role = "MERN Developer"; 
const company = "Infosys"; 

console.log(`${names} is a ${role} in a ${company}`)

const student = { name: "Arun", course: "MERN", city: "Chennai" };

const {name , ...others} = student

console.log(name)
console.log(others)

const colors = ["Red", "Blue", "Green"]

const [color1 , color2] = colors

console.log(color1)
console.log(color2)

function welcomeUser(input){
     if(input){
        console.log(input)
     }else{
        console.log('no data')
     }
}

welcomeUser();

const canname = "Priya";
const canrole = "React Developer";

const employee = { canname, canrole };

console.log(employee);

const userName = null;

const displayName = userName ?? "Guest User";

console.log(displayName)

import { add, sub } from "./math.js"

console.log(add(20, 10))
console.log(sub(20, 10))