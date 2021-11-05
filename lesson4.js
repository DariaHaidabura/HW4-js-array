console.log('------------- #5')
let ask = (question, yes, no) => confirm(question) ?  yes() : no();
ask(
  "Вы согласны?",
() => console.log("Вы согласились."), // нужно обновить данное место
() => console.log("Вы отменили выполнение.") // нужно обновить данное место
);

console.log('------------- #6')
let str =  'my-short-string';
console.log(str.split('-'))

console.log('------------- #7')
let arr =  ['JavaScript', 2015];
console.log(arr.join(' '))

console.log('------------- #8')
let users =[
  {id: 1, name: "Vic", age: 21},
  {id: 2, name: "Petya", age: 30},
  {id: 3, name: "Jon", age: 5}];

  let result = users.filter(user => user.age < 20);
  console.log(result);

  console.log('------------- #9')
  let users1 = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}];

    let names = users1.map(user => user.name)
    console.log(names); 

    console.log('------------- #10')
    
    function filterRangeInPlace(arr, a, b) {

      for (let i = 0; i < arr.length; i++) {
        if (a <= arr[i] <= b) {
          arr.splice(i, 1);
        }
      }
    }
    
    let arr1 = [5, 3, 8, 1];
    filterRangeInPlace(arr1, 1, 4);
    console.log( arr1 ); 

    // console.log('------------- #11')

    function splitString(stringToSplit, separator) {
     const result = stringToSplit.split(separator);
     console.log(result);
    }
    
    let tempestString = 'И как хорош тот новый мир, где есть такие люди!';
    
    splitString(tempestString, ' ')
   
    // console.log('------------- #12')
    let arr2 = [5, 3, 8, 1];
    let range = slArray(arr2, 1, 4)
  
    function slArray(arr2, startIndex, endIndex) {
      return arr2.slice(startIndex, endIndex)
    }

    console.log( range );  
    console.log( arr2 ); 

    // console.log('------------- #13')
    let sum = (...args) => args.reduce((s, num) => s + num, 0);

    console.log(sum(1,2,3,4,5))
