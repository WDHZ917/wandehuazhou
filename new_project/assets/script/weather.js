// assets/script/weather.js
import amapKey from './config.js';

export async function getWeather() {
    try {
        await new Promise((resolve) => {
            AMap.plugin('AMap.Weather', function () {
                var weather = new AMap.Weather();
                // 查询实时天气，这里以广州为例，你可以修改为其他城市
                weather.getLive('广州', function (err, data) {
                    if (!err) {
                        const weatherString = `<span id="city_text">${data.city}</span>&nbsp;
                                               <span id="wea_text">${data.weather}</span>&nbsp;
                                               <span id="tem_text">${data.temperature}°C&nbsp;</span>
                                               <span id="win_text">${data.windDirection}</span>
                                               <span id="win_speed">${data.windPower}级</span>`;
                        document.getElementById('weather').innerHTML = weatherString;
                    } else {
                        let errorMessage = '获取天气信息失败';
                        if (err.info) {
                            errorMessage += `: ${err.info}`;
                        }
                        console.error(errorMessage, err);
                        document.getElementById('weather').innerHTML = errorMessage;
                    }
                    resolve();
                });
            });
        });
    } catch (error) {
        console.error('加载配置文件或获取天气信息时出错:', error);
        document.getElementById('weather').innerHTML = '加载配置文件或获取天气信息时出错';
    }
}