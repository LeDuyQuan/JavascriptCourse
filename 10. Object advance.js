Objects are reference values

1. Adding, modifu and delete
const people = {
  name: 'Quan',
  age: 18
}

people.address = '35 NH' -> adding

NULL and undefined
Nếu set people.abc = null nghĩa là object people có property là abc chưa có value
Nếu set people.abc = undefined có nghĩa là people không có thuộc tính abc (về mặt kỹ thuật)


2. Special key name and how to access
const people = {
  'first-name': 'Quan',
  'last name': 'Duy',
  age: 18,
  'address': 'Quan 3',
  1.5: 'so thap phan'
}

-> people['first-name']
-> people['last name']
-> people.age
-> people.address
-> people[1.5] or people['1.5']

Thứ tự trong object sẽ được order (sắp xếp) theo key khi output (tương tự array)


3. Sử dụng dynamic properties
const dynamicName = 'first name';

const people = {
  [dynamicName]: 'Quan',
  'last name': 'Duy'
}

-> people[dynamicName]

3.
