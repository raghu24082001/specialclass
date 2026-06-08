// Arrow function

const data = (a,b)=>{
   console.log(a*b)
}

data(2,3)

//callback function

function dog(name){
   console.log(`${name} is barking`)
}

function animal(species,speciesname){
    species(speciesname)
}

animal(dog,"jonny")

//closure

function closurefunc(){
    let a = 'raghu' 
    function remvalue(){
        console.log(`${a}`)
    }
   remvalue()
}

closurefunc()

// Object value Loop using for in

const car = {
    model: 2001,
    color: "red",
    Type : "Suv"
}

for(let ans in car){
  console.log(car[ans])
}

//Array iteration using map

const data1 = [1,2,3,4,5]

const data2= data1.map((e)=>{
    return e*2
})

console.log(data2)