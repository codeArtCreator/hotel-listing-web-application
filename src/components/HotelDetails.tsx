import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { setSelectedProperty } from '../store/actions/hotelActions';

const HotelDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedProperty(Number(id)));
    }, [dispatch, id]);

    const selectedPropertyId = useSelector((state: RootState) => state.hotel.selectedPropertyId);
    const properties = useSelector((state: RootState) => state.hotel.properties);

    const property = properties.find((property) => property.id === selectedPropertyId);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-md card-container relative">
            <img
                src={property?.image}
                alt={property?.name}
                className="rounded-2xl w-full h-100 object-cover mb-2"
            />
            <div className="p-4">
                <p className="text-gray-600 flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" /><circle cx="12" cy="9" r="2.5" fill="currentColor" /></svg>
                    <span>{' '}{property?.location}</span>
                </p>
                <h2 className="text-xl font-semibold">{property.name}</h2>

                <div className="mt-2 flex justify-between items-center">

                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M13 3a2 2 0 0 1 1.995 1.85L15 5v4h3a2 2 0 0 1 1.995 1.85L20 11v8h1a1 1 0 0 1 .117 1.993L21 21H3a1 1 0 0 1-.117-1.993L3 19h1V5a2 2 0 0 1 1.85-1.995L6 3h7Zm5 8h-3v8h3v-8Zm-5-6H6v14h7V5Zm-2 10v2H8v-2h3Zm0-4v2H8v-2h3Zm0-4v2H8V7h3Z" /></g></svg>
                        <span className="font-semibold">{property?.facility?.rooms || 'N/A'}</span>{' '}Room
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v5c0 .55.45 1 1 1s1-.45 1-1v-1h16v1c0 .55.45 1 1 1s1-.45 1-1v-5c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z" /></svg>
                        <span className="font-semibold"> {property?.facility.beds || 'N/A'}</span>{' '}Bed
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26 4c-2.21 0-4 1.79-4 4h-2v2h6V8h-2c0-1.191.809-2 2-2c1.191 0 2 .809 2 2v6H1v2h1.188l1.53 7.594v.031a3.062 3.062 0 0 0 2 2.219L5 28h2l.656-2h16.688L25 28h2l-.719-2.156c1.047-.32 1.86-1.16 2.094-2.219v-.031L29.813 16H31v-2h-1V8c0-2.21-1.79-4-4-4zM4.219 16h23.593l-1.406 7.219c-.117.433-.484.781-1 .781H6.688c-.536 0-.899-.355-1-.813z" /></svg>
                        <span className="font-semibold">{property?.facility.bathrooms || 'N/A'}</span>{' '}Bath
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.28 6.03a.75.75 0 0 1-1.06 0l-1.47-1.47v3.69a.75.75 0 0 1-1.5 0V4.56L9.78 6.03a.75.75 0 0 1-1.06-1.06l2.75-2.75a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 0 1 0 1.06Zm-9.25 8.19a.75.75 0 1 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 1.06l-1.47 1.47h3.69a.75.75 0 0 1 0 1.5H4.56l1.47 1.47Zm11.94 1.06a.75.75 0 0 1 0-1.06l1.47-1.47h-3.69a.75.75 0 0 1 0-1.5h3.69l-1.47-1.47a.75.75 0 0 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06 0Zm-2.69 2.69a.75.75 0 0 0-1.06 0l-1.47 1.47v-3.69a.75.75 0 0 0-1.5 0v3.69l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 0 0 0-1.06Z" /></svg>
                        <span className="font-semibold">{property?.facility.sqft || 'N/A'}</span>{' '}sft
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="mt-4">
                        <span className="text-xl text-blue-700 font-semibold">${property?.rent}</span><span> / month</span>
                    </div>
                    <button className="mt-4 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                        Book Now
                    </button>
                </div>

                <div className="absolute top-3 left-0 right-0 flex justify-between p-6 items-center top-section">
                    <div className='bg-white rounded-full'>
                        <button className=" font-semibold py-2 px-4 rounded-full">
                            Rent / Sale
                        </button>
                    </div>
                    <div className="px-2 py-2 rounded-full border bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 14"><path fill="none" stroke="rgb(37 99 235)" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z" /></svg>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HotelDetails;
