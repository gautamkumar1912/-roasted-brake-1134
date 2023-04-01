let url='https://amazone-s9tx.onrender.com/'


let s='users'
let id='userCount'
usercount(s,id)
s='products'
id='productCount'
usercount(s,id)
s='cart'
id='ordersCount'
usercount(s,id)


async function usercount(s,id){
    try {
        let count=document.getElementById(`${id}`)
        let res=await fetch(`${url}${s}`)
        let data= await res.json();
        let i;
        if(data.length){
            i=(data.length)
        }else{
            i=(0)
        }
        count.innerHTML=i
        
        
    } catch (error) {
        console.log(error)
    }
}