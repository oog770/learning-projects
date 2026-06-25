(function () {
  const dateElement = document.querySelector("#date");
  const timeElement = document.querySelector("#time");

  // 시간과 날짜를 10보다 작으면 앞에 0을 붙여주는 함수
  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? "0" + number : number;
  };

  const getNowDate = () => {
    const nowDate = new Date();
    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    let month = modifyNumber(nowDate.getMonth() + 1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day]);
  };

  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
  };

  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
  };

  const setNowTime = (hour, minute) => {
    timeElement.textContent = `${hour}:${minute}`;
  };

  getNowDate();
  getNowTime();

  // 시간을 1초마다 갱신하도록 설정
  setInterval(getNowTime, 1000);
})();
