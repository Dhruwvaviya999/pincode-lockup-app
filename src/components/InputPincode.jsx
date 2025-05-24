import React from 'react'
import { useState, useEffect } from 'react';
import "../App.css";

const InputPincode = ({ inputPinCode, setInputPinCode, findPincode }) => {

  return (
    <>
    <div className='input-pincode'>
        <h2>Enter Pincode</h2>
        <input onChange={(e) => setInputPinCode(e.target.value)} type="number" name="pincode" value={inputPinCode} placeholder='Pincode' id="pincode" />
        <button onClick={findPincode} className='lockupBtn'>Lockup</button>
    </div>
    </>
  )
}

export default InputPincode