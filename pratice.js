let wantFruit = prompt('Do You Want Fruits:');
if (wantFruit == 'yes' || wantFruit == 'YES'){
    //first code
    let fruitName1= prompt('Enter First Fruit Name');
    if (fruitName1 != '' && typeof fruitName1 == 'string'){
        let fruitCount1 = +prompt(`Enter How Many ${fruitName1} Do You Want`);
        if(fruitCount1 != '' && typeof fruitCount1 == 'number'){
            console.log('data is stored');            
        }
        else{
            console.log('Number Of Friuits Must Be Number');            
        }
    }
    else{
        console.log('Must Enter Name Of Fruit Do You Want');
    }
//second Fruit
let fruitName2= prompt('Enter Second Fruit Name');
if (fruitName2 != '' && typeof fruitName2 == 'string'){
    let fruitCount2 = +prompt(`Enter How Many ${fruitName2} Do You Want`);
    if(fruitCount2 != '' && typeof fruitCount2 == 'number'){
        console.log('data is stored');            
    }
    else{
        console.log('Number Of Friuits Must Be Number');            
    }
}
else{
    console.log('Must Enter Name Of Fruit Do You Want');
}
//Third Fruit
let fruitName3= prompt('Enter Third Fruit Name');
if (fruitName3 != '' && typeof fruitName3 == 'string'){
    let fruitCount3 = +prompt(`Enter How Many ${fruitName3} Do You Want`);
    if(fruitCount3 != '' && typeof fruitCount3 == 'number'){
        console.log('data is stored');            
    }
    else{
        console.log('Number Of Friuits Must Be Number');            
    }
}
else{
    console.log('Must Enter Name Of Fruit Do You Want');
}
console.log(`Your Selecetd fruits details are:
Your First Fruit Name: ${fruitName1}
Number Of ${fruitName1} Count: ${fruitCount1}
Your Second Fruit Name: ${fruitName2}
Number Of ${fruitName2} Count: ${fruitCount2}
Your Third Fruit Name: ${fruitName3}
Number Of ${fruitName3} Count: ${fruitCount3}`);
}
else{
    console.log('Thanks! Please Vist Again When Your Need Fruits');
}