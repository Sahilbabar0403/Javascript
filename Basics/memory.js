/* in JS we have 2 types of memory
 stack  memory 
 heap memory


 Stack for primitive datatypes 
 heap for non primitive datatypes

 in stack we get a copy of the data
 in heap we get reference of data


 so when we uodate data in stack we are not actually changing the data,but the copy of data
 and in heap we get reference so we are basically changing the data in the memory.*/

//primitive datatypes
 let firstname="Sahil"
 let name=firstname;
 name="Rohan"
 console.log(name)
 //here the copy is provided so there no change in the memory
 console.log(firstname)

//non primitive datatypes

let obj1=
{
    name:"sahil",
    gmail:"xyz@gmail.com",
    location:"Pune"

}
console.log(obj1)

obj1.name="Rohit"
//here as there is referenece given the name is changed in the memory too 
console.log(obj1.name)
console.log(obj1)