import dayjs from 'dayjs'
import { getWeekStart } from '../../utils/timeutils'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box } from '@mui/material'

function Timesheet() {
    const picker =
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker defaultValue={dayjs(getWeekStart(new Date()))} />
    </LocalizationProvider>
    return (
    <Box>
        {picker}
        <table>
            <thead>
                <tr>
                    <th>
                        Monday
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        08:30
                    </td>
                </tr>
            </tbody>
        </table>
    </Box>
    )
}

export default Timesheet;