import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Cards() {
  return (
    <div>
                <Card sx={{ maxWidth: 345 }} >
                    Card Title
                    <CardContent  className='bg-gray-100' >
                        Hi
                        <div className='flex'>
                            <div className='p-2'>
                                <select>
                                    {Array.from(Array(6), (e, i) => {
                                        return (<option key={i + 1} value={i + 1}>{i + 1} </option>)
                                    })}
                                </select>
                            </div>
                            <div className='p-2'>
                                <select>
                                    <option key={1} value="half">Half</option>
                                    <option key={2} value="full">Full</option>
                                </select>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
  )
}

export default Cards
