export const fetchRockets = async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    return console.warn(error);
  }
};
