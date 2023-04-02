let url='https://amazone-s9tx.onrender.com/'
let user=document.getElementById('user-data')

async function admindata(){
    try {
        
        let res=await fetch(`${url}users`)
        let data= await res.json();
        user.innerHTML=null;
        data.forEach(e => {
            let tr=document.createElement('tr')
            let num=document.createElement('td')
            num.innerText = e.id

            let name=document.createElement('td')
            name.innerText = e.name

            let email=document.createElement('td')
            email.innerText = e.email

            let phone=document.createElement('td')
            phone.innerText = e.mobile

            let btn=document.createElement('td')
            
            btn.setAttribute('id','delete')
            btn.innerText='Delete'
            btn.addEventListener('click',()=>{

                deleteData(e.id)

            })
            
            tr.append(num,name,email,phone,btn)

            user.append(tr)
        });
        
        
    } catch (error) {
        console.log(error)
    }
}
admindata()

async function deleteData(id) {
    console.log(id)
    try {
        let res = await fetch(`${url}/users/${id}`, {
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
