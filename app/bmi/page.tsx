'use client'

import Image from "next/image"
import bmi from "./../images/bmi.png"

export default function page() {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full transform transition duration-500 hover:scale-105">
          
          {/* Card Header */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">BMI Calculator</h1>
          <p className="text-lg text-center text-gray-500 mb-6">คำนวณ BMI</p>
          
          {/* Image */}
          <div className="flex justify-center mb-6">
            <Image src={bmi} alt="bmi" width={100} height={100} />
          </div>

          {/* Weight Input */}
          <div className="mb-4">
            <label htmlFor="weight" className="block text-md font-medium text-pink-600 mb-2">
              ป้อนน้ำหนัก (กิโลกรัม)
            </label>
            <input
              type="number"
              id="weight"
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
              className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="เช่น 170"
            />
          </div>
              {/* Age Input */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-md font-medium text-purple-600 mb-2">
              ป้อนอายุ (ปี)
            </label>
            <input
              type="number"
              id="age"
              className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="เช่น 30"
            />
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
                  className="form-radio h-5 w-5 text-pink-600"
                />
                <label htmlFor="female" className="ml-2 text-gray-700">หญิง</label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-blue-600 transition duration-300 shadow-md">
              คำนวณ BMI
            </button>
            <button className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white font-bold hover:from-green-500 hover:to-green-600 transition duration-300 shadow-md">
              รีเซต
            </button>
          </div>

          {/* Result Display */}
          <div className="text-center p-4 rounded-lg bg-mint-50 border-2 border-mint-200">
            <p className="text-lg font-semibold text-mint-700">
              ค่า BMI ที่คำนวณได้: <span className="font-bold">0.00</span>
            </p>
          </div>

        </div>
      </div>
  )
}
