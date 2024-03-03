import { Grid, Paper } from '@mui/material'
import React from 'react'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const orderstatus = [
  { label: 'On the Way', value: "on_the_way" },
  { label: 'Delivered', value: "delivered" },
  { label: 'Cancelled', value: "cancelled" },
  { label: 'Returned', value: "returned" },
]

const order = () => {
  return (
    <>
      <main style={{ marginBottom: '10rem', marginLeft: '2rem', marginTop: '2rem' }}>
        <Grid container spacing={2}>

          {/* Filter Grid */}
          <Grid item xs={3} className={styles.sticky_filter}>
            <Paper elevation={3} sx={{ padding: '1rem', height: 'fit-content', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h1 className='font-bold text-lg'>Filter</h1>
              <div className='space-y-4 mt-10'>
                <h1 className='font-semibold'>ORDER STATUS</h1>
                {orderstatus.map(option => (
                  <div className="flex items-center" key={option.value}>
                    <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 ' />
                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </Paper>
          </Grid>

          {/* Product Grid */}
          <Grid item xs={9}>
            <Paper elevation={1} sx={{ padding: '1rem', height: 'fit-content', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }} style={{ marginRight: '2rem', marginBottom: '1rem' }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                <Link href="/orderdetails">
                  <div className='flex cursor-pointer'>
                    <img style={{ width: '5rem' }} src="https://lenouveauchef.com/cdn/shop/files/908001069_5-full-front.jpg?v=1708623938&width=1440" alt="image" />
                    <div className='ml-5 space-y-2'>
                      <p>Title of the jeans</p>
                      <p className='opacity-50 text-xs font-semibold'>Size : M</p>
                      <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
                    </div>
                  </div>
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <p>Rs. 2000.00</p>
                </Grid>
                <Grid item xs={4}>
                  <p>
                    <FiberManualRecordOutlinedIcon sx={{ width: '15px', height: '15px' }} className='text-green-600 mr-2' />
                    <span>
                      Expected Delivered On March 12
                    </span>
                  </p>
                  <p><small>Your item has been delivered</small></p>
                </Grid>
              </Grid>

            </Paper>

          </Grid>

        </Grid>
      </main>
    </>
  )
}

export default order
