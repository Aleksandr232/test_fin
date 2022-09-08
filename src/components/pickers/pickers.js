import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {useDispatch} from 'react-redux'
import {inputDate } from '../../redux/action'

import './pickers.scss'

export default function Picker() {
  const [value, setValue] = useState(null);

  const dispatch = useDispatch();

  const dateHandler = (e) =>{
    dispatch(inputDate(e.target?.date))
    setValue(e);
}
  return (
  <>
    <div className='datepicker'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={e=>dateHandler(e)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </div>
    <div className='datepicker1'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
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
