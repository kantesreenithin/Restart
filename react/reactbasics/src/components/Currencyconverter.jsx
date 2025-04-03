import React from 'react'
import {InputBox} from './index.js';
import { useState } from 'react';
import useCurrencyInfo from '../hooks/useCurrencyinfo.js';
const Currencyconverter = () => {
    const [amount,setAmount]=useState(0);
    const [from,setFrom]=useState("usd");
    const [to,setTo]=useState("inr");
    const [convertedAmount,setConvertedAmount]=useState(0); 

    const currencyInfo=useCurrencyInfo(from)
    const options=Object.keys(currencyInfo);
    const swap=()=>{
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert=()=>{
        setConvertedAmount(Math.round(amount*currencyInfo[to]));
    }
  return (
    <div className="max-w-md mx-auto bg-gray-800 text-white p-6 rounded-lg shadow-md">
    <h1 className="text-center text-5xl font-bold mb-6">Currency Converter</h1>
    
    <form 
        className="space-y-6"
        onSubmit={(e) => {
            e.preventDefault();
            convert();
        }}
    >
        {/* From Currency Input */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
            />
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
            <button 
                type="button" 
                onClick={swap}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
                Swap
            </button>
        </div>

        {/* To Currency Input */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <InputBox
                label="To"
                amount={convertedAmount}
                amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
            />
        </div>

        {/* Convert Button */}
        <button 
            type="submit" 
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-500 transition"
        >
            Convert {from.toUpperCase()} to {to.toLocaleUpperCase()}
        </button>
    </form>
</div>

  )
}

export default Currencyconverter