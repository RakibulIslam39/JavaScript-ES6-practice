// const myvar = {
//   name: "Rakibul",
//   ID : "029",
//   CGPA : "2.5"
//      //object theke  name take ber kore onno ekta variable a assign korte chai jeno onno jaigai use korte pari.
// }
// var {name}= myvar;
// console.log(name);

    
// const info = {
//   name: 'Emon',
//   Id : "034",
//   CGPA : "2.7",
//       //title namer variable a assign korte chai.
// }
// var {Id : ID,name : title}= info;
// console.log(title,ID);

//     // nasting
// var myvar = {
//   ID : " 029",
//   CGPA : "2.6",
//   Name : {
//     username : "Rakibul",
//     nickname : "Tahsin",
//   }
// };
// const {
//   Name : {username},
// } = myvar
// console.log(username);
// const {ID} = myvar
// console.log(ID);
//       // array distructuring
// var number = [1,2,3,4,[99,33,22],4,5,6]
// var [x,,,y,[,z,]] = number;
// console.log(x,y,z);
//    //Array nasting
// var numbers = [1,2,3,[44,35,56]];
// var [,,a,[,,b]]= numbers;

// console.log(a,b);
    //Value Swap using distructuring

    // var a = 1;
    // var b = 2;
    //      //OLD WAY
    // var temp = a;
    // a=b;
    // b= temp;
    // console.log(a,b);
var a = 1;
var b = 2;
var temp = [b,a]=[a,b];
console.log(a,b);
