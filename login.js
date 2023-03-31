// {/* <form action="" id="form">
//           <h3>Sign In to A2Z SHOP</h3>
//           <!-- <label for="">mobile phone number</label> -->
//           <input type="number" placeholder="Mobile Number" id="number">
//           <div style="display: flex; align-items: center;margin-top: 0px;"><input type="checkbox" placeholder="Show Text" onclick="showPass()"> <h5>Show Password</h5></div>
//           <input type="password" placeholder="Enter Password" id="pass">
//           <a style="text-align: left;margin-bottom: 20px;margin-top: 10px;" href="">Forget Your Password?</a>
//           <!-- <p id="para1">Enter Password</p> -->
//           <input type="submit" value="Sign In" id="submit">
//         </form> */}

let formEl=document.querySelector('form')
let mobileInp=document.getElementById('number')
let passwordInp=document.getElementById('pass')

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch('https://amazone-s9tx.onrender.com/users')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
       console.log(data)
       let flag=0
       data.forEach((e)=>{
        if(e.mobile==mobileInp.value&&e.password==passwordInp.value){
            flag=1
        }
       })
       if(flag==1){
        alert('signin successfull')
        window.location.href='index.html'
       }else{
        alert('please check your credenetial')
       } 
    })
})