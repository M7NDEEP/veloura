import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Dilivery = () => {
  return (
    <>
      <main style={{ width: '85%', height: '100vh', display: 'flex', margin: '0 auto' }}>
        <div style={{ height: '80vh', width: '40%', overflowY: 'auto', padding: '1rem 0.5rem', margin: 'auto 0' }}>
          <div style={{ borderLeft: '1px solid black', paddingLeft: '0.6rem' }}>
            <h2 style={{ fontWeight: 'bold' }}>Sender's Name</h2>
            <p style={{ lineHeight: '1rem' }}><small>38 kalani nagar indore mp 452005 INDIA</small></p>
            <p style={{ lineHeight: '1rem', marginTop: '0.3rem' }}><small><b>Phone Number</b>  <br /> 8825684512</small></p>
          </div>

          <div style={{ marginTop: '2.2rem', borderLeft: '1px solid black', paddingLeft: '0.6rem' }}>
            <h2 style={{ fontWeight: 'bold' }}>Reciever's Name</h2>
            <p style={{ lineHeight: '1rem' }}><small>38 kalani nagar indore mp 452005 INDIA</small></p>
            <p style={{ lineHeight: '1rem', marginTop: '0.3rem' }}><small><b>Phone Number</b>  <br /> 8825684512</small></p>
          </div>

        </div>

        <div style={{ height: '80vh', width: '100%', margin: 'auto 0', marginLeft: '4rem', display: 'flex', justifyContent: 'centre' }}>
          <div style={{ borderLeft: '1px solid #00000012', paddingLeft: '0.5rem', margin: '0 auto' }}>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 0.8, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="First Name*" variant="outlined" />
              <TextField id="outlined-basic" label="Last Name*" variant="outlined" />
              <br />
              <textarea style={{ minWidth: '64%', maxHeight: '64%', maxHeight: '30vh', padding: '5px', backgroundColor: 'transparent', border: '1px solid #01010142', borderRadius: '3px', outline: 'none' }} placeholder='Address' name="" id="" cols="15" rows="5"></textarea>
              <br />
              <TextField id="outlined-basic" label="City*" variant="outlined" />
              <TextField id="outlined-basic" label="State*" variant="outlined" />
              <br />
              <TextField id="outlined-basic" label="Zip/Postal code*" variant="outlined" />
              <TextField id="outlined-basic" label="Phone Number*" variant="outlined" />
              <br />
              <button style={{ backgroundColor: '#2E2D34', color: 'white', padding: '0.8rem 0rem', borderRadius: '3px' }}>DILIVERD HERE</button>

            </Box>

          </div>
        </div>
      </main>
    </>
  )
}

export default Dilivery