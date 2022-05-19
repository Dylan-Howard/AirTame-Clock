function updateClock() {
  function getTime() {
    const [meridiem, hours, minutes] = ((today) => [
      ((hour) => ((hour >= 12) ? 'PM' : 'AM'))(today.getHours()),
      ((hour) => ((hour > 12) ? hour - 12 : hour))(today.getHours()),
      ((min) => ((min > 9) ? min : `0${min}`))(today.getMinutes()),
    ])(new Date());

    return `${hours}:${minutes} ${meridiem}`;
  }

  document.getElementById('airtame-time').textContent = getTime();
}

updateClock();
setInterval(() => updateClock(), 5000);
