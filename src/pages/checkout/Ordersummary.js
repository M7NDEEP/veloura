import React from 'react';

const Ordersummary = () => (
  <main style={{ width: '80vw', margin: '0 auto', marginTop: '2rem', display: 'flex', justifyContent: 'space-evenly' }}>
    <div>
      <div style={{ borderLeft: '1px solid black', display: 'flex', flexDirection: 'column', paddingLeft: '0.6rem', marginBottom: '3rem' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Sender's Name</h2>
        <p style={{ lineHeight: '1rem', marginBottom: '0.5rem' }}><small>38 Kalani Nagar, Indore MP 452005, INDIA</small></p>
        <p style={{ lineHeight: '1rem', marginTop: '0.3rem', marginBottom: '0.5rem' }}><small><b>Phone Number:</b><br />8825684512</small></p>
      </div>

      <div style={{ display: 'flex', border: '1px solid #00000024', marginTop: '1rem', boxShadow: '2px 2px 2px #00000059', borderRadius: '2px', paddingRight: '5rem' }}>
        <img style={{ width: '8vw', objectFit: 'cover' }} src="https://lenouveauchef.com/cdn/shop/files/908001069_5-full-front.jpg?v=1708623938&width=1440" alt="img" />
        <div style={{ paddingLeft: '0.4rem', margin: 'auto 0' }}>
          <h2 style={{ fontWeight: '500', lineHeight: '1rem', marginBottom: '0.5rem' }}>Title of the Garment</h2>
          <p style={{ color: '#9E9E9E', marginBottom: '0.5rem' }}><small>Size: M, White</small></p>
          <p style={{ color: '#9E9E9E', lineHeight: '0.8rem', marginBottom: '0.5rem' }}><small>Seller: Subh Lakshmi</small></p>
          <h2 style={{ fontWeight: '500', fontSize: '14px' }}>Rs. 2000.00</h2>
        </div>
      </div>
    </div>

    <div style={{ padding: '1rem 2rem', border: '1px solid #00000024', borderRadius: '2px' }}>
      <h2 style={{ color: 'grey', fontWeight: '500', marginBottom: '1rem' }}>Price Details</h2>
      <p style={{ marginBottom: '0.5rem' }}><small>Price (1 item) <span style={{ marginLeft: '4rem' }}>Rs. 2000.00</span></small></p>
      <p style={{ marginBottom: '0.5rem' }}><small>Discount <span style={{ marginLeft: '5.5rem' }}>Rs. -100.00</span></small></p>
      <p style={{ marginBottom: '0.5rem' }}><small>Delivery Charges <span style={{ marginLeft: '2.9rem' }}>Free</span></small></p>
      <p style={{ fontWeight: '500', marginBottom: '1rem' }}><small>Total Amount <span style={{ marginLeft: '3.8rem' }}>Rs. 1900.00</span></small></p>
      <button style={{ backgroundColor: '#2E2D34', color: 'white', padding: '0.8rem 3rem', borderRadius: '3px', marginTop: '1rem', alignSelf: 'center', border: 'none' }}>PAYMENT</button>
    </div>
  </main>
);

export default Ordersummary;
