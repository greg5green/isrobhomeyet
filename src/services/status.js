let returnDate = new Date(2015, 8, 8, 9);

function isHereNow() {
  return Date.now() > returnDate.getTime();
}

function timeRemaining() {
  let remainingTime = {
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  let timeLeft = parseInt(((returnDate.getTime() - Date.now()) / 1000), 10);

  if (isHereNow()) {
    return remainingTime;
  }

  remainingTime.weeks = parseInt((timeLeft / (60 * 60 * 24 * 7)), 10);
  timeLeft = timeLeft % (60 * 60 * 24 * 7);

  remainingTime.days = parseInt((timeLeft / (60 * 60 * 24)), 10);
  timeLeft = timeLeft % (60 * 60 * 24);

  remainingTime.hours = parseInt((timeLeft / (60 * 60)), 10);
  timeLeft = timeLeft % (60 * 60);

  remainingTime.minutes = parseInt((timeLeft / 60), 10);
  remainingTime.seconds = parseInt((timeLeft % 60), 10);

  return remainingTime;
}

export default { isHereNow, timeRemaining };
