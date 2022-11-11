
import { useEffect } from "react";
import { useState } from "react";
import '../header/Header.css'
import useApi from '../../hooks/useApi'

export default function Header() {

  const [UAHtoUSD, setUAHtoUSD] = useState(0)
  const [UAHtoEUR, setUAHtoEUR] = useState(0)
  const apiKey = 'LSpbNk2N664jecweVD84nCeOxN1VRhdk'

  const USDRate = useApi('USD', apiKey);
  const EURRate = useApi('EUR', apiKey);
  
  useEffect(() => {
    setUAHtoUSD(USDRate.data)
  }, [USDRate]);

  useEffect(() => {
    setUAHtoEUR(EURRate.data)
  }, [EURRate]);

  return (
    <div className="header">
      <h1>Currency Converter</h1>
      <p>UAH to USD: {UAHtoUSD}</p>
      <p>UAH to EUR: {UAHtoEUR}</p>
    </div>
  );
}
