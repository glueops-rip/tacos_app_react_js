export const getDeliveryTime = (deliveryDate) => {
  const currentTime = new Date();
  const deliveryTime =
    60 * (deliveryDate.getHours() - currentTime.getHours()) +
    (deliveryDate.getMinutes() - currentTime.getMinutes());
  return deliveryTime;
};

export const formatMinutesTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes - 60 * hours;

  let format = "";
  format += hours > 0 ? `${hours}h` : "";
  format += minutes > 0 ? `${mins}min` : "";

  return format;
};

export const getEndpoint = (route) => {
  return process.env.REACT_APP_API_DOMAIN_NAME + route;
};
