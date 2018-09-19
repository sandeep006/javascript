let bookName=prompt('Enter Your Book Name TO Purchage:');
if(bookName != '' && typeof bookName == 'string'){
    var bookCount = +prompt('Enter book count:');
    if(bookCount != '' && typeof bookCount == 'number'){
        console.log(`your purchage order for book:
        Book Name: ${bookName}
        Book Count: ${bookCount}`);
    }else{
        console.log('your order cannot be placed');   
    }
}else{
    console.log("book name should not to be empty");
}