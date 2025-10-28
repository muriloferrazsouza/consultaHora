import './style.css';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(utc);
dayjs.extend(timezone);

setInterval(() => {
    const hour = document.querySelector('#currentHour');
    const date = document.querySelector('#currentDate');
    const userTimezone = document.querySelector('#timezones').value;
    const today = dayjs();
    const d2 = dayjs.utc(today).tz(userTimezone);
    hour.textContent = d2.format('HH:mm:ss');
    date.textContent = d2.format('DD/MM/YYYY');

}, 1000);
