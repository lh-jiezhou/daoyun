// // 二、箭头函数使用
// // 1.简单改写
// // function doubleValue (value) {
// //     return value * 2
// // }
// const doubleValue = (value) => { //改写
//     return value * 2;
// }
// console.log(doubleValue(4))
// const addNumbers = (a, b) => {
//     return a + b;
// }
// console.log(addNumbers(3, 4))

// // 2.进一步简化 (当函数体只有一行)
// // const printName = (name) => {
// //     "hello " + name
// // }
// const printName = name => "hello " + name
// console.log(printName("lihao"))

// // 3.遍历数组
// const companies = ["google", "huawei"]
// // const result = companies.map(function(company) { //map为es5中函数,类似for
// //     return company + "is a company";
// // })
// const result = companies.map(company => company + "is a company")
// console.log(result)
// const ages = [14, 18, 21]
// // const result2 = ages.filter(function(age) { // es5中filter函数
// //     return age > 18;
// // })
// const result2 = ages.filter(age => age > 18)
// console.log(result2)
// const result3 = ages.filter(age => { //两行不能简化 
//     const nextYearAge = age + 1;
//     return nextYearAge > 18;
// })
// console.log(result3)

// // 4.当前 this 值？
// // 普通函数: 会重新绑定this
// // 箭头函数: 不会重新绑定this


// // 三、模板字符串(用于字符串拼接)
// const person = {
//     name: "lihao",
//     hometoen: "湖南",
//     age: 22
// }
// // 1.普通字符串拼接
// const intro =
//     "大家好，我是" +
//     person.name +
//     "，今年" +
//     person.age +
//     "岁，来自" +
//     person.hometoen + "。"
// console.log(intro)

// // 2.模板字符串：反引号(支持换行)
// const intro2 = `大家好，我是${person.name}，今年${person.age}岁，来自${person.hometoen}。
//     我明年就${person.age + 1}`
// console.log(intro2)

// // 3.练习
// const calc = x => {
//     return `你输入的参数是{${x}}，它的两倍是{${2*x}}，它的平方是{${x*x}}`
// }
// console.log(calc(2))


// // 四、Set和 Map
// // 1.Set: Set里边的值不重复
// const numberSet = new Set()
// numberSet.add(1) // add
// numberSet.add(2)
// numberSet.add(3)
// numberSet.add(1)
// console.log(numberSet)
// numberSet.delete(1) // 返回true, false
// console.log(numberSet)
// console.log(numberSet.has(2))
// console.log(numberSet.size) // 元素个数
// numberSet.forEach( number => {
//     console.log(number)
// })

// // 2.Map: 
// const person = new Map()
// person.set("name", "lihao")
// person.set("age", 22)
// person.set("hobby", ["足球", "游戏"])
// console.log(person)
// console.log(person.get("hobby"))
// console.log(person.has("age"))
// person.set("age", 28) // 有则更新, 无则添加
// person.delete("hobby")
// console.log(person)
// person.forEach( per => {
//     console.log(per) //遍历
// })
// // es6新方法遍历 for...of


// 五、解构赋值
const person = {
    name: "lihao",
    age: 22,
    city: "湖南"
}
// 1.普通赋值
const name1 = person.name
console.log(name1)

//2. 解构赋值
// object用{}花括号, 里边的变量名和person中一样
const {name, age, city} = person 
// const [name, age, city] = person // 数组用[]方括号

console.log(name, age, city)