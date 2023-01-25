import React, { useState } from 'react'

function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [allEntry,setAllEntry] = useState([]);



    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry = { email: email, password:password};
        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry)
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" name='email' id='email' 
                placeholder='Enter Your Email ID' autoComplete='off' 
                value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' id='password'  
                placeholder='Enter your Password' autoComplete='off' 
                value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button type='submit'>Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElm)=>{
                        return  (
                            <div key={email}>
                                <p>
                                    {curElm.email}
                                </p>
                                <p>
                                    {curElm.password}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LoginForm