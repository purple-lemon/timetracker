import dayjs from 'dayjs'
export function getWeekStart(date: Date): Date {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -7 : 0);
    return new Date(date.setDate(diff));
}