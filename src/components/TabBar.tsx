import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCity, resetItemsToShow } from '../store/actions/hotelActions';
import { RootState } from '../store/store';

const cities = ['New York', 'Mumbai', 'Paris', 'London'];

const TabBar: React.FC = () => {
    const dispatch = useDispatch();
    const activeCity = useSelector((state: RootState) => state.hotel.activeCity);

    const handleTabClick = (city: string) => {
        dispatch(setActiveCity(city));
        dispatch(resetItemsToShow());
    };

    return (
        <div className="p-4">
            <div className="flex justify-between items-center top">
                <div className="flex justify-between items-center gap-5">
                    {cities.map((city) => (
                        <button
                            key={city}
                            onClick={() => handleTabClick(city)}
                            className={`shadow-md ${activeCity === city
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                                } px-4 py-2 rounded-full focus:outline-none`}
                        >
                            {city}
                        </button>
                    ))}
                </div>
                <button className="mt-4 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full view-all">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default TabBar;
