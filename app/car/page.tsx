'use client'

import car from "./../images/car.png"
import Image from "next/image"

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full transform transition duration-500 hover:scale-105">
          
          {/* Card Header */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Car Installment</h1>
          <p className="text-lg text-center text-gray-500 mb-6">คำนวณค่างวดรถยนต์</p>

          <div className="flex justify-center mb-6">
            <Image src={car} alt="car" width={100} height={100} />
          </div>
          
          {/* Form Inputs */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-md font-medium text-pink-600 mb-2">
              ชื่อผู้กู้
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-pink-50 border-2 border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700"
              placeholder="กรุณาใส่ชื่อ"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="carPrice" className="block text-md font-medium text-purple-600 mb-2">
              ราคารถ (บาท)
            </label>
            <input
              type="number"
              id="carPrice"
              className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
              placeholder="เช่น 600000"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="interestRate" className="block text-md font-medium text-blue-600 mb-2">
              ดอกเบี้ยต่อปี (%)
            </label>
            <input
              type="number"
              id="interestRate"
              className="w-full p-3 rounded-lg bg-blue-50 border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
              placeholder="เช่น 2.5"
            />
          </div>
          
          {/* Down Payment Radio Buttons */}
          <div className="mb-4">
            <span className="block text-md font-medium text-pink-600 mb-2">เงินดาวน์ (%)</span>
            <div className="grid grid-cols-3 gap-2">
              {[15, 20, 25, 30, 35].map((percent) => (
                <div key={percent} className="flex items-center">
                  <input
                    type="radio"
                    id={`downPayment-${percent}`}
                    name="downPayment"
                    value={percent}
                    className="form-radio h-5 w-5 text-pink-600"
                  />
                  <label htmlFor={`downPayment-${percent}`} className="ml-2 text-gray-700">{percent}%</label>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Term Dropdown */}
          <div className="mb-6">
            <label htmlFor="loanTerm" className="block text-md font-medium text-purple-600 mb-2">
              จำนวนเดือน
            </label>
            <select
              id="loanTerm"
              className="w-full p-3 rounded-lg bg-purple-50 border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700"
            >
              {[...Array(8).keys()].map(i => (
                <option key={i} value={(i + 1) * 12}>{(i + 1) * 12} เดือน</option>
              ))}
            </select>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mb-6">
            <button className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold hover:from-blue-500 hover:to-blue-600 transition duration-300 shadow-md">
              คำนวณ
            </button>
            <button className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-green-400 to-green-500 text-white font-bold hover:from-green-500 hover:to-green-600 transition duration-300 shadow-md">
              ล้างข้อมูล
            </button>
          </div>

          {/* Result Display */}
          <div className="text-center p-4 rounded-lg bg-mint-50 border-2 border-mint-200">
            <p className="text-lg font-semibold text-mint-700">
              ค่างวดต่อเดือนโดยประมาณ: <span className="font-bold">0.00 บาท</span>
            </p>
          </div>

        </div>
      </div>
  )
}
