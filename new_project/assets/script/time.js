// assets/script/time.js
export function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${year} 年 ${month} 月 ${day} 日 <span class="weekday">${weekday}</span><br><span class="time-text">${hours}:${minutes}:${seconds}</span>`;
    document.getElementById('time').innerHTML = timeString;
}