
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function RegisterPageNormal() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [salutation, setSalutation] = useState('');
  const [country, setCountry] = useState('');
  const [hobbies, setHobbies] = useState([]);


  const handleHobbies = (e) => {
    if (e.target.checked) {
      //console.log(e.target.value);
      //const clonedHobbies = hobbies.slice();

      const clonedHobbies = [...hobbies, e.target.value];
      setHobbies(clonedHobbies);
    } else {
      // remove the hobby from the array
      const indexToRemove = hobbies.findIndex((eachHobby) => {
        return eachHobby === e.target.value;
      });
      //   // old method before 2023
      //   // if (indexToRemove != -1){
      //   //   const cloneHobbies=[
      //   //     ...hobbies.slice(0, indexToRemove),
      //   //     ...hobbies.slice(indexToRemove+1)
      //   //   ];
      //   //   setHobbies(cloneHobbies);
      //   // }
      //   // new syntex or new method 2023 onwards
      const cloneHobbies = hobbies.toSpliced(indexToRemove, 1);
      setHobbies(cloneHobbies);
    }
  };


  return (
    <>
      <div className='container m-5'>
        <h1>Register Page</h1>
        <form>
          <div>
            <label htmlFor='fName' className='form-label' >Firstname:</label>
            <input type='text' className='form-control' id='fName' value={firstName} onChange={(e) => {
              setFirstName(e.target.value);
            }} />
          </div>
          <div>
            <label htmlFor='lName' className='form-label'>Lastname:</label>
            <input type='text' id='lName' value={lastName} className='form-control' onChange={(e) => {
              setLastName(e.target.value);
            }} />
          </div>
          <div>
            <label htmlFor='email' className='form-label'>E-mail:</label>
            <input type='email' id='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password' className='form-label'>Password:</label>
            <input type='password' id='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="mb-3">
            <label className="form-label">Salutation:</label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="salutation" id="mr" value="mr" onChange={(event) => {
                  setSalutation(event.target.value);
                }} checked={salutation === "mr"} />
                <label className="form-check-label" htmlFor="mr">Mr</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="salutation" id="mrs" value="mrs" onChange={(e) => {
                  setSalutation(e.target.value);
                }} checked={salutation === 'mrs'} />
                <label className="form-check-label" htmlFor="mrs">Mrs</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="salutation" id="ms" value="ms" onChange={(e) => setSalutation(e.target.value)} checked={salutation === 'ms'} />
                <label className="form-check-label" htmlFor="ms">Ms</label>
              </div>

              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="salutation" id="dr" value="dr" onChange={(e) => setSalutation(e.target.value)} checked={salutation === 'dr'} />
                <label className="form-check-label" htmlFor="dr">Dr</label>
              </div>
            </div>
          </div>
          <div>
            <label className='form-label'>Country:</label>
            <select name="country" id="country" className='form-select' value={country} onChange={(e) => setCountry(e.target.value)} >
              <option value="sg">Singapore</option>
              <option value="in">India</option>
              <option value="my">Malaysia</option>
              <option value="th">Thailand</option>
              <option value="others">Other-Countries</option>
            </select>
          </div>

          <div>
            <label className='form-label'>Hobbies:</label>


            <div className='form-check'>
              <div>
                <input type='checkbox' className="form-check-input" name='hobby' value="cricket" onChange={handleHobbies} checked={hobbies.includes("cricket")} />
                <label className='form-check-label'>Cricket</label>
              </div>

              <div>
                <input type='checkbox' className="form-check-input" name='hobby' value='football' onChange={handleHobbies} checked={hobbies.includes("football")} />
                <label className='form-check-label'>Football</label>
              </div>
              <div>
                <input type='checkbox' className="form-check-input" name='hobby' value='swimming' onChange={handleHobbies} checked={hobbies.includes("swimming")} />
                <label className='form-check-label'>Swimming</label>
              </div>
              <div>
                <input type='checkbox' className="form-check-input" name='hobby' value='watchmovie' onChange={handleHobbies} checked={hobbies.includes("watchmovie")} />
                <label className='form-check-label'>Watch Movie</label>
              </div>
            </div>


          </div>
          <div className='mt-3'>
            <button type="submit" className="btn btn-primary">Register</button>
          </div>

        </form>
      </div>

    </>
  )


}

export default RegisterPageNormal;