import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import './pickers.scss'

export default function PickerTwo() {
  const [value, setValue] = useState(null);

  return (
    <>
    <div className='pickertwo'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    <div className='pickertwo1'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
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