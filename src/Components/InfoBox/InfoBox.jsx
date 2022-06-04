import { Card,CardContent,Typography } from '@mui/material'
import React from 'react'
import './InfoBox.css'

const InfoBox = ({title,cases,active,total,isRed,...props}) => {
  return (
    <Card  onClick={props.onClick} className={ `infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`} >
        <CardContent>
            <Typography className='infoBox__title' sx={{ fontSize: 14 }} color="text.secondary" >
                {title}
            </Typography>
            <Typography sx={{ fontSize: 20 }} className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
                {cases} 
            </Typography>
            <Typography className='infoBox__total'>
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox