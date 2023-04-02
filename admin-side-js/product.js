let url='https://amazone-s9tx.onrender.com/'
let user=document.getElementById('user-data')

async function productdata(){
    try {
        
        let res=await fetch(`${url}products`)
        let data= await res.json();
        user.innerHTML=null;
        data.forEach(e => {
            let tr=document.createElement('tr')
            let num=document.createElement('td')
            num.innerText = e.id

            let name=document.createElement('td')
            name.innerText = e.name

            let desc=document.createElement('td')
            desc.innerText = e.desc

            let price=document.createElement('td')
            price.innerText = e.price

            let btn=document.createElement('td')
            
            btn.setAttribute('id','delete')
            btn.innerText='Delete'
            btn.addEventListener('click',()=>{

                deleteData(e.id)

            })
            
            tr.append(num,name,desc,price,btn)

            user.append(tr)
        });
        
        
    } catch (error) {
        console.log(error)
    }
}
productdata()

async function deleteData(id) {
    console.log(id)
    try {
        let res = await fetch(`${url}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        let data = await res.json();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}