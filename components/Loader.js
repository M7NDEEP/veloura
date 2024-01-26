import React from 'react'
import Loadercss from './Loader.module.css'

const Loader = () => {
  return (
    <>
    <div className={Loadercss.body}></div>
    <span className={Loadercss.loader}></span>
    </>
  )
}

export default Loader