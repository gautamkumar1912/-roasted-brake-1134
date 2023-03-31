// {/* <form action="" id="form">
//           <h3 style="text-align: center;">Create an Account</h3>
//           <p style="font-size: 13px;margin-top: -10px;">Shopping for your business?<a href="index.html">Create a business account.</a></p>
//           <!-- <label for="">Your name</label> -->
//           <input type="text" placeholder="First and last name" id="cusName">
//           <!-- <input type="text" placeholder="Last Name"> -->
//           <!-- <label for="">Mobile number</label> -->
//           <!-- <div>
//           <select name="" id="selectCode">
//             <option value="">IN +91</option>
//             <option value="">IN +91</option>
//             <option value="">IN +91</option>
//           </select>
//           </div> -->
//           <input type="email" id="email1" placeholder="Email Address">
//           <!-- <label for="">Email Address</label> -->
//           <!-- <label for="">Password</label> -->
//           <input type="password" placeholder="Password" id="pass">
//           <p id="para1"> Passwords must be at least 6 characters.</p>
//           <!-- <input type="Password" placeholder="Confirm Password"> -->
//           <input type="number" placeholder="Mobile number" id="number">
//           <p>By enrolling your mobile phone number, you consent <br>
//             to receive automated security notifications via text <br>
//             message from Amazon. Message and data rates may <br>
//             apply.</p>
//           <input type="submit" value="Create an Account" id="submit">
//         </form> */}

let formEl=document.querySelector('form')

let nameInp=document.getElementById('cusName')
let emailInp=document.getElementById('email1')
let password=document.getElementById('pass')
let mobile=document.getElementById('number')

formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    let newuserobj={
        name:nameInp.value,
        email:emailInp.value,
        password:password.value,
        mobile:mobile.value
    }

    fetch(`https://amazone-s9tx.onrender.com/users`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newuserobj)
    })
    .then((res)=>{
        console.log(res)
        if(res.ok){
            alert('Account created successfully')
            window.location.href='login.html'
        }
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
})