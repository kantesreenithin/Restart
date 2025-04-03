import React,{useId} from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    amountDislabled=false,
    currencyDislabled=false,
}) => {
    const id=useId()
  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
    {/* Label & Input */}
    <div className="mb-3">
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
            {label}
        </label>
        <input
            id={id}
            type="number"
            placeholder="Amount"
            value={amount}
            disabled={amountDislabled}
            onChange={(e) => {
                const value=e.target.value;
                onAmountChange && onAmountChange(value === ""?"":Number(value));}}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-600"
        />
    </div>

    {/* Currency Selection */}
    <div>
        <p className="text-sm font-medium text-gray-300 mb-1">Currency Type</p>
        <select
            value={selectedCurrency}
            disabled={currencyDislabled}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-600"
        >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
    </div>
</div>

  )
}

export default InputBox