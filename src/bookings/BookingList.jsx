import React from 'react';
// import BookingItem from './BookingItem';    // Adjust the path as necessary
// import './BookingList.css';   // Adjust the path as necessary
// import { AuthContext } from '../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import bookingHelpers from '../Helpers/bookingHelpers'; // Import bookingHelpers    
import { useContext } from 'react';
import { useState, useEffect } from 'react';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    // const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [bookingList, setBookingList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');           

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const bookings = await bookingHelpers.getAll();
                setBookings(bookings);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBookings();
    }, []);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredBookings = bookings.filter((booking) =>
        booking.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleDelete = async (bookingId) => {
        try {
            await bookingHelpers.deleteById(bookingId);
            setBookingList(bookingList.filter((booking) => booking.id !== bookingId));
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    const handleEdit = (bookingId) => {
        navigate(`/bookings/edit/${bookingId}`);
    };  


    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by issue description"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="booking-list">
                {filteredBookings.map((booking) => (
                    <BookingItem
                        key={booking.id}
                        booking={booking}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookingList;
