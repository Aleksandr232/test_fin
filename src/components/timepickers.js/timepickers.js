import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import './timepickers.scss'

export default function BasicTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <>
    <div className='time'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="22.00"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    <div className='time1'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="22.00"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    </>
  );
}