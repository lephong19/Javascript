// Group nhiều cấp
const employees = [
    { id: 1, name: "A", department: "IT", level: "junior" },
    { id: 2, name: "B", department: "IT", level: "senior" },
    { id: 3, name: "C", department: "HR", level: "junior" },
    { id: 4, name: "D", department: "IT", level: "junior" },
    { id: 5, name: "E", department: "HR", level: "senior" }
];
function valite (employee){
     if(!employee || typeof employee !== 'object' || Array.isArray(employee))
            throw new Error('Loi NV')
    if((!('id' in employee)) ||!Number.isInteger(employee.id) || employee.id<=0 )
        throw new Error('Loi ID')

    if(!employee.name || typeof employee.name!=='string')
        throw new Error('Loi Name')

    if(!employee.department || typeof employee.department !=='string')
        throw new Error('Loi department')

    if(!employee.level || typeof employee.level !=='string')
        throw new Error('Loi level')
}
function groupEmployees(employees){
    if(!Array.isArray(employees) || employees.length===0)
        throw new Error('Loi ds employees')

    let group={}
    for(let x of employees){
       
        valite(x)
        const {id,name,department,level}=x
        if(!group[department]){
            group[department]={}
        }
        if(!(level in group[department])){
            group[department][level]=[]
        }
        group[department][level].push({
            id,name,department,level
        })

    }
    return group
}
//console.log(JSON.stringify(groupEmployees(employees), null,2))
function frequencyByDeparment(employees){
    if(!Array.isArray(employees) || employees.length===0)
        throw new Error('Ds NV Rong')

    let fre={}
    for(let x of employees){
        valite(x)
        if(!(x.department in fre)){
            fre[x.department]=1
        }else
        fre[x.department]+=1
    }
    return fre
}
//console.log(frequencyByDeparment(employees))
const products = [
    { id: 1, name: "A", price: 100 },
    { id: 2, name: "B", price: 250 },
    { id: 3, name: "C", price: 150 },
    { id: 4, name: "D", price: 300 }
];
function getProductStats(products){
    if(!Array.isArray(products) || products.length===0)
        throw new Error('Loi Products')

    const timMin= products.reduce((acc,product)=>{
        return product.price<acc?product.price:acc
    },products[0].price)

     const timMax= products.reduce((acc,product)=>{
        return product.price>acc?product.price:acc
    },products[0].price)
    
    const total=products.reduce((acc,product)=>{
        return acc+=product.price
    },0)
    
    const average=total/products.length

    let count=products.length

    return {
        min:timMin,
        max:timMax,
        total:total,
        average:average,
        count:count
    }
}
//console.log(getProductStats(products))
const listProducts = [
    { id: 1, name: "iPhone 15", category: "phone", price: 1000, stock: 10 },
    { id: 2, name: "Samsung S24", category: "phone", price: 900, stock: 5 },
    { id: 3, name: "MacBook Air", category: "laptop", price: 1500, stock: 3 },
    { id: 4, name: "Dell XPS", category: "laptop", price: 1200, stock: 8 },
    { id: 5, name: "iPhone 13", category: "phone", price: 700, stock: 0 }
];

function searchProduct(listProducts,options){
  
}