const WhatIsTheTime = timeInMirror => {
  const [hour, time] = timeInMirror.split(':');

  let formattedTime = 60 - time;
  let formattedHour = 23 - hour;

  if (formattedTime === 60) {
    formattedHour++;
    formattedTime = '00';
  }
  if (formattedTime > 0 && formattedTime < 10) {
    formattedTime = '0' + formattedTime;
  }
  if (formattedHour > 12) {
    formattedHour = `0${formattedHour - 12}`;
  }

  return `${formattedHour}:${formattedTime}`;
};
