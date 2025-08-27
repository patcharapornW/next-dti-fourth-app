'use client'

import { useState } from 'react'
import Image from "next/image"
import bmr from "./../images/bmr.png" 

export default function Page() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmrResult, setBmrResult] = useState('0.00');

  const handleCalculate = () => {
    if (age && weight && height) {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseInt(age);
      let calculatedBmr;

      // Harris-Benedict Equation for BMR calculation
      if (gender === 'male') {
        calculatedBmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
      } else { // female
        calculatedBmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
      }
      
      setBmrResult(calculatedBmr.toFixed(2));
    } else {
      setBmrResult('0.00');
    }
  };

  const handleReset = () => {
    setGender('male');
    setAge('');
    setWeight('');
    setHeight('');
    setBmrResult('0.00');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full transform transition duration-500 hover:scale-105">
        
        {/* Card Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">BMR Calculator</h1>
        <p className="text-lg text-center text-gray-500 mb-6">คำนวณแคลอรี่พื้นฐานที่ร่างกายต้องการ</p>
        
        {/* Image */}
        <div className="flex justify-center mb-6">
          <Image src={bmr} alt="bmr" width={100} height={100} />
        </div>
        
        {/* Gender Selection */}
        <div className="mb-4">
          <span className="block text-md font-medium text-pink-600 mb-2">เลือกเพศ</span>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <label htmlFor="male" className="ml-2 text-gray-700">ชาย</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio h-5 w-5 text-pink-600"
              />
              <label htmlFor="female" className="ml-2 text-gray-700">หญิง</label>
            </div>
          </div>
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-md font-medium text-purple-600 mb-2">
            ป้อนอายุ (ปี)
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
            placeholder="เช่น 30"
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4">
          <label htmlFor="weight" className="block text-md font-medium text-pink-600 mb-2">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 rounded-lg bg-pink-50 border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700"
            placeholder="เช่น 65"
          />
        </div>

        {/* Height Input */}
        <div className="mb-6">
          <label htmlFor="height" className="block text-md font-medium text-purple-600 mb-2">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
            placeholder="เช่น 170"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mb-6">
          <button 
            onClick={handleCalculate}
            className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-blue-600 transition duration-300 shadow-md">
            คำนวณ BMR
          </button>
          <button 
            onClick={handleReset}
            className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white font-bold hover:from-green-500 hover:to-green-600 transition duration-300 shadow-md">
            รีเซต
          </button>
        </div>

        {/* Result Display */}
        <div className="text-center p-4 rounded-lg bg-mint-50 border-2 border-mint-200">
          <p className="text-lg font-semibold text-mint-700">
            BMR ที่คำนวณได้: <span className="font-bold">{bmrResult}</span> แคลอรี่/วัน
          </p>
        </div>
      </div>
    </div>
  )
}