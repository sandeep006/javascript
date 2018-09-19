let Scheme = prompt('Enter Your Amount:');
    if (Scheme >= 1000 && Scheme < 2000){
    console.log(Scheme*2);
    }
   else if (Scheme >= 2000 && Scheme < 50000){
        console.log(Scheme*10);
    }
    else if(Scheme >=50000 && Scheme <= 100000){
        console.log(Scheme*30);  
    }
   else{
        alert('Enter valid Nummber.')
   }