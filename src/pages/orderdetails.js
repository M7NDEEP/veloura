import { Grid, Paper } from '@mui/material';
import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Placed', 'Order Confirmed', 'Shipped', 'Out For Delivery', 'Delivered'];

const OrderDetails = () => {
  const [activeStep, setActiveStep] = React.useState(2);
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepSkipped = (step) => skipped.has(step);

  return (
    <main style={{ width: '80vw', display: 'flex', flexDirection: 'column', margin: '0 auto', marginTop: '1rem', marginBottom: '4rem' }}>

      {/* Address Bar */}
      <div style={{ borderLeft: '1px solid #00000045', margin: '2rem 1.5rem', backgroundColor: '#FFFFFF', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', padding: '1rem' }}>
        <h2 style={{ fontWeight: 'bold', color: '#333333' }}>Sender's Name</h2>
        <p style={{ lineHeight: '1rem', color: '#333333' }}><small>38 kalani nagar indore mp 452005 INDIA</small></p>
        <p style={{ lineHeight: '1rem', marginTop: '0.3rem', color: '#333333' }}><small><b>Phone Number</b><br />8825684512</small></p>
      </div>

      {/* Stepper */}
      <div style={{ display: 'flex', margin: '1rem 2rem', alignItems: 'center' }}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          style={{ backgroundColor: '#FFFFFF', color: '#333333', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginLeft: '3rem', transform: 'translateY(3px)', scale: '0.8' }}>
          Cancel
        </button>
      </div>

      {/* Product Details */}
      <Grid item xs={9} style={{ margin: '2rem 1.5rem' }}>
        <Paper elevation={1} sx={{ padding: '1rem', height: 'fit-content', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Link href="/orderdetails" style={{ textDecoration: 'none' }}>
                <div className='flex cursor-pointer'>
                  <img style={{ width: '5rem' }} src="https://lenouveauchef.com/cdn/shop/files/908001069_5-full-front.jpg?v=1708623938&width=1440" alt="image" />
                  <div className='ml-5 space-y-2'>
                    <p>Title of the jeans</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <p>Rs. 2000.00</p>
            </Grid>
            <Grid item xs={4}>
              <p>
                <StarRateIcon sx={{ width: '15px', height: '15px' }} className='text-grey-600 mr-1' />
                <span>
                  <Link href="/" style={{ textDecoration: 'none', color: '#333333' }}>Rate & Review Product</Link>
                </span>
              </p>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </main>
  );
}

export default OrderDetails;
