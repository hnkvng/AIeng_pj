import { ReactElement } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ElementProps } from '@core/type';
import dayjs from 'dayjs';

interface DatePickerAppProps {
  label?: string,
  value?: dayjs.Dayjs,
  handleChange?: (value: dayjs.Dayjs | null) => void;
}

const DatePickerApp : ElementProps<DatePickerAppProps> = (
  {
    label,
    value,
    handleChange,
  }
) : ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
          format='YYYY-MM-DD'
          label= {label}
          value= {value}
          onChange={handleChange && ((value: dayjs.Dayjs | null) => handleChange(value))}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default DatePickerApp;