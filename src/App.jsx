import "./App.css";
import { useState, useEffect } from "react";
import InputPincode from "./components/InputPincode";
import PincodeDetails from "./components/PincodeDetails";


function App() {
  const [inputPinCode, setInputPinCode] = useState("");
  const [pincodeData, setPincodeData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const res = await fetch(
      `https://api.postalpincode.in/pincode/${inputPinCode}`
    );
    const data = await res.json();
    setLoading(false);
    setPincodeData(data);
    return data;
  }

  async function findPincode() {
    if (!inputPinCode || inputPinCode.length !== 6) {
      alert("Please enter a valid 6-digit pincode");
      setInputPinCode("");
      return;
    }

    const data = await fetchData();
    console.log(data);
    setInputPinCode("");
  }

  return (
    <>
      {
        loading ? 
        <div style={{height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <div className="loader"></div>
        </div> :
        pincodeData ? (
        <PincodeDetails
          message={pincodeData[0].Message}
          pincodeData={pincodeData}
        />
      ) : (
        <InputPincode
          inputPinCode={inputPinCode}
          setInputPinCode={setInputPinCode}
          findPincode={findPincode}
        />
      )
      }
    </>
  );
}

export default App;
