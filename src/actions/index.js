 function logUser(dataToLog){
    console.log(dataToLog);
    setTimeout(() => {
    console.log(dataToLog);
    console.log(dataToLog);
    console.log(dataToLog);
        console.log('it works somehow');
    }, 1000);
 }

 export default logUser