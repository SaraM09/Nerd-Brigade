// import React from 'react';
// import BookingItem from './BookingItem';    // Adjust the path as necessary
// // import './BookingList.css';   // Adjust the path as necessary
// // import { AuthContext } from '../Context/AuthContext/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import bookingHelpers from '../../Helpers/bookingHelpers'; // Import bookingHelpers    
// import { useContext } from 'react';
// import { useState, useEffect } from 'react';

// const BookingList = () => {
//     const [bookings, setBookings] = useState([]);
//     // const { currentUser } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [bookingList, setBookingList] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');           

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const bookings = await bookingHelpers.getAll();
//                 setBookings(bookings);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//             }
//         };
//         fetchBookings();
//     }, []);
//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };
//     const filteredBookings = bookings.filter((booking) =>
//         booking.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     const handleDelete = async (bookingId) => {
//         try {
//             await bookingHelpers.deleteById(bookingId);
//             setBookingList(bookingList.filter((booking) => booking.id !== bookingId));
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//         }
//     };

//     const handleEdit = (bookingId) => {
//         navigate(`/bookings/edit/${bookingId}`);
//     };  


//     return (
//         <div>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     placeholder="Search by issue description"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//             </div>
//             <div className="booking-list">
//                 {filteredBookings.map((booking) => (
//                     <BookingItem
//                         key={booking.id}
//                         booking={booking}
//                         onDelete={handleDelete}
//                         onEdit={handleEdit}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookingList;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import bookingHelpers from '../Helpers/bookingHelpers'; // Ensure this path is correct
// import BookingItem from './BookingItem.jsx'; // Ensure this is correctly imported


// const BookingList = () => {
//  const [bookings, setBookings] = useState([]);
//  const navigate = useNavigate();
//  const [searchTerm, setSearchTerm] = useState('');

//  useEffect(() => {
//  const fetchBookings = async () => {
//  const bookings = await bookingHelpers.index();
//  setBookings(bookings);
//  };
//  fetchBookings();
//  }, []);

//  const handleSearch = (event) => {
//  setSearchTerm(event.target.value);
//  };

//  const filteredBookings = bookings.filter((booking) =>
//  booking.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
//  );

//  const handleDelete = async (bookingId) => {
//  try {
//  await bookingHelpers.deleteById(bookingId);
//  setBookings(bookings.filter((booking) => booking.id !== bookingId));
//  } catch (error) {
//  console.error('Error deleting booking:', error);
//  }
//  };

//  const handleEdit = (bookingId) => {
//  navigate(`/bookings/edit/${bookingId}`);
//  };

//  return (
//  <div>
//  <div className="search-container">
//  <input
//  type="text"
//  placeholder="Search by issue description"
//  value={searchTerm}
//  onChange={handleSearch}
//  />
//  </div>
//  <div className="booking-list">
//  {filteredBookings.map((booking) => (
//  <BookingItem
//  key={booking.id}
//  booking={booking}
//  onDelete={handleDelete}
//  onEdit={handleEdit}
//  />
//  ))}
//  </div>
//  </div>
//  );
// };

// export default BookingList;
import axios from 'axios'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bookingHelpers from "../../Helpers/bookingHelpers"; // Ensure this path is correct
import BookingItem from './BookingItem.jsx'; // Ensure this is correctly imported

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     const fetchBookings = async () => {
    //         const bookings = await bookingHelpers.index();
    //         setBookings(bookings);
    //     };
    //     fetchBookings();
    // }, []);
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:1119/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Fetching all bookings failed:', error);
            }
        };
    
        fetchBookings();
    }, []);
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // // const filteredBookings = bookings.filter((booking) =>
    //     booking.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const handleDelete = async (bookingId) => {
        try {
            await bookingHelpers.deleteById(bookingId);
            setBookings(bookings.filter((booking) => booking.id !== bookingId));
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
            {/* <div className="booking-list">
                {filteredBookings.map((booking) => (
                    <BookingItem
                        key={booking.id}
                        booking={booking}
                        onDelete={handleDelete}
                        onEdit={handleEdit} */}
                    {/* />
                ))} */}
            {/* </div> */}
        </div>
    );
};  

export default BookingList;

// import React, { useState, useEffect } from 'react';
// import BookingItem from './BookingItem'; // Adjust the path as necessary
// import { useNavigate } from 'react-router-dom';
// import bookingHelpers from '../../Helpers/bookingHelpers'; // Adjust the path as necessary

// const BookingList = () => {
//     const [bookings, setBookings] = useState([]);
//     const navigate = useNavigate();
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchBookings = async () => {
//             try {
//                 const fetchedBookings = await bookingHelpers.getAll();
//                 setBookings(fetchedBookings);
//             } catch (error) {
//                 console.error('Error fetching bookings:', error);
//                 // Consider showing an error message to the user
//             }
//         };
//         fetchBookings();
//     }, []);

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     const filteredBookings = bookings.filter((booking) =>
//         booking.issueDescription.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const handleDelete = async (bookingId) => {
//         try {
//             await bookingHelpers.deleteById(bookingId);
//             setBookings(bookings.filter((booking) => booking.id !== bookingId));
//         } catch (error) {
//             console.error('Error deleting booking:', error);
//             // Consider showing an error message to the user
//         }
//     };

//     const handleEdit = (bookingId) => {
//         navigate(`/bookings/edit/${bookingId}`);
//     };

//     return (
//         <div>
//             <div className="search-container">
//                 <input
//                     type="text"
//                     placeholder="Search by issue description"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//             </div>
//             <div className="booking-list">
//                 {filteredBookings.map((booking) => (
//                     <BookingItem
//                         key={booking.id}
//                         booking={booking}
//                         onDelete={handleDelete}
//                         onEdit={handleEdit}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookingList;