import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bmi from './images/bmi.png'
import bmr from './images/bmr.png'
import car from './images/car.png'
import calculator from './images/calculator.png'

export default function Home() {
  return (
      <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* Header */}
      <header className=" text-gray-800 shadow-lg">
        <br />
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Image src={calculator} alt='logo' width={100} height={100} className='mx-auto'/>
        </div> 
        <br />
        <h1 className="text-4xl font-bold text-center" >เครื่องมือคำนวณออนไลน์</h1>
        <br />
        <br />
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Choose Your Calculator</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* BMI Card */}
          <Link href="/bmi" passHref>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 transform hover:-translate-y-2 cursor-pointer border-t-4 border-blue-500">
              <div className="flex flex-col items-center">
                <Image src={bmi} alt='bmi' width={50} height={50} className='mx-auto'/>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">BMI Calculator</h3>
                <p className="text-gray-600 text-center">Check your Body Mass Index to find out if your weight is healthy.</p>
              </div>
            </div>
          </Link>

          {/* BMR Card */}
          <Link href="/bmr" passHref>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 transform hover:-translate-y-2 cursor-pointer border-t-4 border-green-500">
              <div className="flex flex-col items-center">
                <Image src={bmr} alt='bmr' width={50} height={50} className='mx-auto'/>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">BMR Calculator</h3>
                <p className="text-gray-600 text-center">Calculate your Basal Metabolic Rate to estimate daily calorie needs.</p>
              </div>
            </div>
          </Link>

          {/* Car Installment Card */}
          <Link href="/car" passHref>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 transform hover:-translate-y-2 cursor-pointer border-t-4 border-purple-500">
              <div className="flex flex-col items-center">
                <Image src={car} alt='car' width={50} height={50} className='mx-auto'/>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Car Installment</h3>
                <p className="text-gray-600 text-center">Estimate your monthly car payment with our loan calculator.</p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <div className="container mx-auto px-6">
            <p>&copy; 2024 Calculators. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
