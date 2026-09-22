const users = [
    { id: 1, name: "Phong Nguyen", email: "phong@gmail.com" },
    { id: 2, name: "An Tran", email: "an@gmail.com" },
    { id: 3, name: "Nam Nguyen", email: "nang@gmail.com" }
];


function search(users,keyword){
    if(!Array.isArray(users) || users.length===0)
        throw new Error('loi users')

    if(typeof keyword !=='string' || keyword.trim()==='')
        throw new Error('loi keyword')

    let a=[]
    let count=0
    for(let x of users){
        if(x.name.toLowerCase().includes(keyword.toLowerCase()) 
         || x.email.toLowerCase().includes(keyword.toLowerCase())){
        count++
            a.push(x)
        }

        
    }
    return {
        found:count>0,
        count:count,
        users:a
    }
}
//console.log(search(users,'An'))

function searchKeywords(users,keywords){
   //
}