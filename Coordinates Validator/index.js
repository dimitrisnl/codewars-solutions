const isValidCoordinates = coordinates => {
  let [lat, lon] = coordinates.split(', ');

  if (isNaN(lat) || isNaN(lon) || lat.includes('e') || lon.includes('e')) {
    return false;
  }

  let formattedLat = parseFloat(lat);
  let formattedLon = parseFloat(lon);

  formattedLat = Math.abs(formattedLat);
  formattedLon = Math.abs(formattedLon);

  return (
    formattedLat >= 0 &&
    formattedLat <= 90 &&
    formattedLon >= 0 &&
    formattedLon <= 180
  );
};
