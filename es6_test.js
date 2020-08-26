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
// const person = {
//     name: "lihao",
//     age: 22,
//     city: "湖南",
//     social: {
//         qq: "897587636",
//         phone: "123"
//     }
// }
// // 1.普通赋值
// const name1 = person.name
// const age1 = person.age
// const qq1 = person.social.qq
// console.log(name1, age1, qq1)

// //2. 解构赋值
// // object用{}花括号, 里边的变量名和person中一样
// const { age, city} = person 
// // const [name, age, city] = person // 数组用[]方括号

// console.log( city, age)

// // const { qq, phone } = person.social
// // console.log(qq, phone)
// const { name, social:{qq}} = person
// console.log(name, qq)

// // 3.解构赋值起别名
// const {
//     name: personName = "hhh", // 默认值（假如name不存在）
//     social: { qq: QQ }
// } = person
// console.log(personName, QQ)

// // 4.数组的解构赋值类似 
// // 一个应用实例 变量互换
// let a = 1;
// let b = -1;
// [a, b] = [b, a] // 可读性好
// console.log(a, b)

// // 字符串分割
// const record = "pocky, 3.98, Oct 11 2019"
// const recordArr = record.split(",")
// console.log(recordArr)
// const [name, price, data] = recordArr
// console.log(name, price, data)


// 六、剩余参数和扩展参数
// // 1.剩余参数
// const team = ["易建联", "郭艾伦", "翟小川", "赵继伟"]
// // const [ captain, assistant, players] = team
// const [captain, assistant, ...players] = team // wes bos
// console.log(captain, assistant, players)

// // 用剩余参数对任意个数参数 排序 （剩余参数:多个数合并为一个数组）
// function sortNumber(...nums) {
//     if (nums.length == 0) {
//         return [];
//     } else {
//         // return nums.sort();
//         return nums.sort((a, b) => a - b);
//             // function (a, b) {
//             //     return a - b;
//             // });
//     }
// }
// console.log(sortNumber(1, 2, 10, 5))

// // 2.扩展参数
// const captain = "易建联";
// const assistant = "郭艾伦";
// const players = ["翟小川", "赵继伟"]

// // const team = [captain, assistant, players]
// const team = [captain, assistant, ...players]
// console.log(team)

// 3.使用实例
const food = [
    "汉堡",
    "鸡腿",
    "薯片"
]
const drink = [
    "可乐",
    "雪碧"
]
// const kfc = food.concat(drink)
// const kfc = [food, drink]
const kfc = [...food, "甜筒", ...drink]
console.log(kfc)

const a = {
    "aa": "aaa"
}
const b = {
    "bb": "bbb"
}
console.log({...a, ...b})

// 七、其他小技巧
// 1.默认参数值
// function orderCombo(comboName, drink){
// es6之前默认参数 (两种写法)
// if (drink == undefined){
//     drink = "可乐"
// }
// drink = drink || "可乐"
//es6默认参数写法
// function orderCombo(comboName = "汉堡", drink = "可乐") {
//     console.log(`您点了${comboName}，
//     饮料是：${drink}。`)
// }
// // orderCombo("薯片", "雪碧");
// orderCombo(undefined, "雪碧");

// // 2.字符串 includes, startsWith, endWith
// const string = "abc"
// const substring = "ab"
// console.log(string.includes(substring)) // 是否包含
// console.log(string.includes("d"))
// console.log(string.startsWith(substring)) // 是否以某开头
// console.log(string.startsWith("b", 1))
// console.log(string.endsWith(substring)) // 是否以某结尾
// console.log(string.endsWith("c")) // 是否以某结尾


// 3.for...of
const foods = [
    "汉堡",
    "鸡腿",
    "薯片"
]
// for (const food of foods){
//     console.log(food)
// }
for (const [index, food] of foods.entries()){ // 附带位置
    console.log(`第${index+1}号套餐的食物是${food}`)
}

// 对象还是用 for..in (其余用 for..of)
const person = {
    name: "lihao",
    age: 22,
    city: "湖南",
    social: {
        qq: "897587636",
        phone: "123"
    }
}
for (const key in person){
    console.log(key, person[key])
}