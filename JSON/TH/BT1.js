/*
const json = '{"id":10,"name":"An","age":21}';

const convert=JSON.parse(json)
console.log(convert)

convert.age++
convert.role='user'

let json1=JSON.stringify(convert)
console.log(json1)
*/
const json = `[
    {"id":1,"name":"Phong","age":20},
    {"id":2,"name":"An","age":17},
    {"id":3,"name":"Nam","age":22}
]`;
// lọc age>=18 trả về lại json

// const a=JSON.parse(json)

// const timAgePhuHop=a.filter(i=>i.age>=18)

//console.log(JSON.stringify(timAgePhuHop))
const a = `{"name":"Phong","age":20}`;

const b = `[1,2,3,4]`;

const c = `{
    "user": {
        "name": "Phong",
        "age": 20
    }
}`;

const d = `{
    "users": [
        {"id":1,"name":"Phong"},
        {"id":2,"name":"An"}
    ]
}`;

const e = `"Hello World"`;
console.log(JSON.parse(a))
console.log(JSON.parse(b))
console.log(JSON.parse(c))
console.log(JSON.parse(d))
console.log(JSON.parse(e))