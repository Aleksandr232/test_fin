import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './datepickers.scss'

export default function BasicDatePicker() {
  const [value, setValue] = useState(null);

  return (
  <>
    <div className='date'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="22.12.2019"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    <div className='date1'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="22.12.2019"
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



