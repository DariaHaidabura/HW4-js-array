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

  let result = users.filter(user => user.age > 20);
  console.log(result);

  console.log('------------- #9')
  let users1 = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}];

    let names = users1.map(user => user.name)
    console.log(names); 
