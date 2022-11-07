
import { useEffect } from "react";
import { useState } from "react";
import '../header/Header.css'

export default function Header() {

  const [UAHtoUSD, setUAHtoUSD] = useState(0)
  const [UAHtoEUR, setUAHtoEUR] = useState(0)

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=USD&amount=1`, {

        headers: {
            'apikey': 'LSpbNk2N664jecweVD84nCeOxN1VRhdk',
          },
      }
    )
      .then((response) => response.json())
      .then((responsedata) => {
        setUAHtoUSD(Math.round(responsedata.result * 100) / 100)
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=EUR&amount=1`, {

        headers: {
            'apikey': 'LSpbNk2N664jecweVD84nCeOxN1VRhdk',
          },
      }
    )
      .then((response) => response.json())
      .then((responsedata) => {
        setUAHtoEUR(Math.round(responsedata.result * 100) / 100)
      });
  }, []);


  return (
    <div className="header">
      <h1>Currency Converter</h1>
      <p>UAH to USD: {UAHtoUSD}</p>
      <p>UAH to EUR: {UAHtoEUR}</p>
    </div>
  );
}
