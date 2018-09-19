let box = alert ('Welocme TO Magical Scheme');
    let scheme1 = +prompt ('Enter Amount Vale Here To Invest:');
    if(scheme1 >= 1000 && scheme1 < 2000){
        console.log(scheme1*2);
        }
    else if(scheme1 >=2000 && scheme1 < 50000){
        console.log(scheme1*5);
    }
    else if(scheme1 >=50000 && scheme1 < 100000){
        console.log(scheme1*8);
    }
    else if(scheme1 >= 100000){
        console.log(scheme1*10);
    }
    else{
        console.log('Plese Enter Amount Above 1000 or in numeric');
    }