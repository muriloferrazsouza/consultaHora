import './style.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const hour = document.querySelector('#currentHour');
const date = document.querySelector('#currentDate');
const timearea = document.querySelector('#Timezone');



setInterval(() => {
    timearea.textContent = userTimezone;
    hour.textContent = dayjs().format('HH:mm:ss');
    date.textContent = dayjs().format('DD/MM/YYYY');

}, 1000);
