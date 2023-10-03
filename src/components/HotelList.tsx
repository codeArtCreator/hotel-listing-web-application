import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import HotelCard from './HotelCard';
import { loadMoreProperties } from '../store/actions/hotelActions';

const HotelList: React.FC = () => {
    const activeCity = useSelector((state: RootState) => state.hotel.activeCity);
    const properties = useSelector((state: RootState) => state.hotel.properties);
    const itemsToShow = useSelector((state: RootState) => state.hotel.itemsToShow);

    const dispatch = useDispatch();

    if (!activeCity) {
        return <div>Loading active city...</div>;
    }

    if (!properties) {
        return <div>Loading properties...</div>;
    }

    const filteredData = properties.filter((property) => property.city === activeCity);

    if (filteredData.length === 0) {
        return <div>No hotels found for the selected city.</div>;
    }

    const visibleData = filteredData.slice(0, itemsToShow);

    const handleLoadMore = () => {
        dispatch(loadMoreProperties());
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                {visibleData.map((property) => (
                    <HotelCard key={property.id} property={property} />
                ))}
            </div>
            {itemsToShow < filteredData.length && (
                <div className="my-4 text-center">
                    <button
                        className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                        onClick={handleLoadMore}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="white"><path d="M13 6h-2v1a1 1 0 1 0 2 0V6Z" /><path fill-rule="evenodd" d="M6 2v2h1v3a5 5 0 0 0 5 5a5 5 0 0 0-5 5v3H6v2h12v-2h-1v-3a5 5 0 0 0-5-5a5 5 0 0 0 5-5V4h1V2H6Zm3 2h6v3a3 3 0 1 1-6 0V4Zm0 13v3h6v-3a3 3 0 1 0-6 0Z" clip-rule="evenodd" /></g></svg>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default HotelList;
