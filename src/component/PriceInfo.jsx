import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const PriceInfo = () => {
    return (
        <div className="text-center text-light py-4 my-3" style={{ backgroundColor: '#1c1e2b' }}>
            <div className="d-flex justify-content-around align-items-center flex-wrap">

                {/* Left Section */}
                <div className="text-center mx-4">
                    <h4 style={{ color: '#55e5cb' }}>0.1 %</h4>
                    <p className="mb-0">5 Mins</p>
                </div>

                <div className="text-center mx-4">
                    <h4 style={{ color: '#55e5cb' }}>0.96 %</h4>
                    <p className="mb-0">1 Hour</p>
                </div>

                {/* Center Section */}
                <div className="text-center mx-4">
                    <p className="mb-1" style={{ fontSize: '18px', fontWeight: '500' }}>Best Price to Trade</p>
                    <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>₹ 26,56,110</h2>
                    <p className="mb-0" style={{ fontSize: '14px' }}>Average BTC/INR net price including commission</p>
                </div>

                {/* Right Section */}
                <div className="text-center mx-4">
                    <h4 style={{ color: '#55e5cb' }}>2.73 %</h4>
                    <p className="mb-0">1 Day</p>
                </div>

                <div className="text-center mx-4">
                    <h4 style={{ color: '#55e5cb' }}>7.51 %</h4>
                    <p className="mb-0">7 Days</p>
                </div>
            </div>
        </div>
    )
}

export default PriceInfo