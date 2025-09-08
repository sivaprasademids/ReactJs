import React, {useState} from "react";

// Header 
const Header = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Time Entries');
      return (
    <>
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-gray-200 p-2 rounded-lg mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">TimeWise</span>
              <span className="text-sm text-gray-500">Take control of your time, boost productivity, and achieve your goals.</span>
            </div>
          </div>
          <br />
          <nav className="flex items-center space-x-6 text-sm">
            {['Dashboard', 'Time Entries', 'Projects', 'Tasks', 'Reports', 'Calendar', 'Notifications', 'Settings'].map(tab => (
              <a
                key={tab}
                href="#"
                onClick={(e) => { e.preventDefault(); onTabChange(tab); setActiveTab(tab); }}
                className={`pb-1 border-b-2 ${activeTab === tab ? 'border-teal-600 text-teal-600 font-semibold' : 'border-transparent hover:text-gray-600'}`}
              >
                {tab}
              </a>
            ))}
          </nav>
        </header>        
    </>
  );
};

export default Header;