import React, { FC } from 'react';
import { BiUserCircle } from 'react-icons/bi';

const BankSync: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 flex flex-col items-center justify-center">
      {/* Card Container */}
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold">BudgetFast</h1>
            <BiUserCircle className="text-3xl text-white/90 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Link Your Bank & Budget Smarter</h2>
          
          <div className="space-y-4">
            <FeatureItem 
              title="Automated Bank Syncing" 
              description="Let our app securely sync your bank data in real-time"
            />
            <FeatureItem 
              title="Smart Spending Categories" 
              description="Transactions automatically sorted for effortless tracking"
            />
            <FeatureItem 
              title="Financial Insights" 
              description="Get personalized reports to understand your money habits"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md">
            Connect Your Bank Securely
          </button>
        </div>

        {/* Trust Badges */}
        <div className="px-8 pb-6 flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="bg-gray-100 px-3 py-1 rounded-full">🔒 256-bit Encryption</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">✔️ FDIC Insured</span>
        </div>
      </div>
    </div>
  );
};

// Reusable feature component
const FeatureItem: FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex items-start gap-3">
    <div className="bg-blue-100 p-1.5 rounded-full mt-0.5">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default BankSync;