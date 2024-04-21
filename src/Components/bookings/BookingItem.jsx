// import React from 'react';

// import './BookingList.css';   // Adjust the path as necessary
// import { AuthContext } from '../Context/AuthContext/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import bookingHelpers from '../Helpers/bookingHelpers'; // Import bookingHelpers                 // Adjust the path as necessary                 // Adjust the path as necessary
// import { useContext } from 'react'; // Adjust the path as necessary              



// const BookingItem = React.createClass({

//     displayName: 'BookingItem',      // Adjust the display name as necessary    

//     render() {                      // Adjust the render function as necessary
//         const { currentUser } = useContext(AuthContext);
//         const navigate = useNavigate();
//         const { booking } = this.props;
//         const { id, issueDescription, scheduledDate, status } = booking;
//         const formattedDate = new Date(scheduledDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
//         const handleEdit = () => {
//             navigate(`/bookings/${id}/edit`);
//         };
//         const handleDelete = async () => {
//             try {
//                 await bookingHelpers.deleteById(id);
//                 this.props.onDelete(id);
//             } catch (error) {
//                 console.error('Error deleting booking:', error);
//             }
//         };
//         return (
//             <div className="booking-item">
//                 <div className="booking-details">
//                     <h3>{issueDescription}</h3>
//                     <p>Scheduled Date: {formattedDate}</p>
//                     <p>Status: {status}</p>
//                 </div>
//                 <div className="booking-actions">
//                     <button onClick={handleEdit}>Edit</button>
//                     <button onClick={handleDelete}>Delete</button>
//                 </div>
//             </div>
//         );
//     }
// });     

// export default BookingItem; 
// import React from 'react';

// const BookingItem = ({ booking, onDelete, onEdit }) => {
//     return (
//         <div className="booking-item">
//             <h3>{booking.issueDescription}</h3>
//             <p>Service Type: {booking.serviceType}</p>
//             <p>Status: {booking.status}</p>
//             <p>Scheduled Date: {new Date(booking.scheduledDate).toLocaleDateString()}</p>
//             {booking.costEstimate && <p>Cost Estimate: ${booking.costEstimate.toFixed(2)}</p>}
//             <div className="booking-item-actions">
//                 <button onClick={() => onEdit(booking.id)}>Edit</button>
//                 <button onClick={() => onDelete(booking.id)}>Delete</button>
//             </div>
//         </div>
//     );
// };

// export default BookingItem;

import React from "react";

const BookingItem = ({ booking, onDelete, onEdit }) => {
    return (
        <div className="booking-item">
            <h3>{booking.issueDescription}</h3>
            <p>Service Type: {booking.serviceType}</p>
            <p>Status: {booking.status}</p>
            <p>Scheduled Date: {new Date(booking.scheduledDate).toLocaleDateString()}</p>
            {booking.costEstimate && <p>Cost Estimate: ${booking.costEstimate.toFixed(2)}</p>}
            <div className="booking-item-actions">
                <button onClick={() => onEdit(booking.id)}>Edit</button>
                <button onClick={() => onDelete(booking.id)}>Delete</button>
            </div>
        </div>
    );
};

export default BookingItem;