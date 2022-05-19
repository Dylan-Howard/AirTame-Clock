let imageIndex = 2;

function updateImage() {
  const images = [
    { id: '1az2xz_fotP7AchAR6Bnv7l6_-yv3hIFb', location: '' },
    { id: '15sdB7_U2arn3GcW077G16RiYSDCdasIP', location: '' },
    { id: '16H-pxJV83TbOnMaXrKV7uOrQtT1mbCCk', location: '' },
    { id: '1PI6AZPR4PehE1OaKQSKlaEEJTcPpjDJd', location: '' },
    { id: '1i61fn9ZaIFe84nNhFARBECtBY1UBpxav', location: '' },
    { id: '1zASJXAaoh0AjD0n539LTObEiqlZpCqkw', location: '' },
    { id: '1tBiop5JQ_A02sele8DLjz-BZvVGIj3_u', location: '' },
    { id: '1Fydg3qPu9ZLA7rt0Zo2qP0ZdYrCmhQ4s', location: '' },
  ];

  const getImageId = (index) => ((index < images.length) ? images[index + 1].id : images[0].id);

  document.getElementById('airtame-background').src = `https://drive.google.com/uc?id=${getImageId(imageIndex)}`;
  imageIndex += 1;
}
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
updateImage();
setInterval(() => updateClock(), 10000);
