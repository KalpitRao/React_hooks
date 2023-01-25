import React, { useState } from 'react'

function FormValidation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);



    const submitForm = (e) => {
        e.preventDefault();

        if(email && password){
            const newEntry = {email: email, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry)

        setEmail("");                     //After we click on Login the input field should be shown empty.
        setPassword("");

        }else{
            alert ("Please fill the data")
        }



        

    }



    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="text" name='email' id='email'
                        placeholder='Enter Your Email ID' autoComplete='off'
                        value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='password'
                        placeholder='Enter your Password' autoComplete='off'
                        value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElm) => {
                        return (
                            <div key={curElm.email}>            
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

export default FormValidation