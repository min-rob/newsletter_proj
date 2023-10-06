import React from 'react'
import Button from './button'
import { ReactComponent as DesktopSVG } from '../assets/img/illustration-sign-up-desktop.svg';
import { ReactComponent as ListSVG } from '../assets/img/icon-list.svg';


function Card() {
    const svgStyle = {
        width: '12px',
        height: '12px',
    };
  return (
    <div className='card-wrapper flex flex-row bg-gray-100 rounded-xl'>
        <div className='p-container m-12 flex-col justify-center items-center space-y-8'>
            <h1 className='text-4xl font-bold text-indigo-900'>
                Stay Updated!
            </h1>
            <p>
                Join 60,000+ product manager's receiving updates monthly updates on:
            </p>
                <ul className="custom-list space-y-6">
                <li className="flex items-center">
                    <ListSVG className="w-4 h-4 mr-2" /> {/* Adjust width, height, and margin */}
                    Product discovery, and building what matters
                </li>
                <li className="flex items-center">
                    <ListSVG className="w-4 h-4 mr-2" /> {/* Adjust width, height, and margin */}
                    Measuring to ensure updates are a success
                </li>
                <li className="flex items-center">
                    <ListSVG className="w-4 h-4 mr-2" /> {/* Adjust width, height, and margin */}
                    and much much more!
                </li>
                </ul>   
            <form>
                <label className='input_label'>
                    Email address:
                    <input className='email-input border border-gray-400 p-2 rounded w-full' type='text' name='email' placeholder='email@company.com'/>
                </label>
            </form>
            <Button/>

        </div>
        <div className='img-container m-12'>
            <DesktopSVG/>
        </div>

    </div>

  )
}

export default Card