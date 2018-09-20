// let x= 50;
// let z= x++;
// console.log(x); //51
// console.log(z); //50
// // console.log(typeof z);
// // let s= 10;
// // let b= ++s;
// // console.log(s);
// // console.log(b);
// console.log(z++);//50 //51
// console.log(++z);//52
// console.log(x++);//51 //52
// console.log(++x);//53
// console.log(x--);//53 //52
// console.log(--x);//51
// console.log(--z);//51
// console.log(z--);//51 //50

let accesflag ;
let age = prompt('How Old Are You');
// if(age>18){
//     accesflag = true;
//     console.log('you are allowed to drive');
// }else{
//     accesflag = false;
//     console.log('you are not allowed');
// }
// console.log(accesflag);
// accesflag = (age>18)?'allowed':'notallowed';
// console.log(accesflag);

accesflag = (age>3 && age<15)?'you are a baby not allowed to Drive':
            (age>=15 && age <18)?'you dont have a licence to drive':
            (age>=18)?'you are allowed to Drive':
            'not allowed ..NO info...invalid data';
console.log(accesflag);
