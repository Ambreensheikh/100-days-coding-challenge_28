// arrow function returns multiple parameters with rest parameters
//rest parameter is dnoted by ...
const multiplyParameters = (...numbers : number[]) =>numbers.reduce((total:any , number)=>
    total*number , 1 );
  console.log (multiplyParameters(2, 3, 4, 5));

    