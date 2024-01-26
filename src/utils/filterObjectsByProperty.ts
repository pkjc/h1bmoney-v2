// Function to filter objects by a specific property
const filterObjectsByProperty = (objects, property, value) => {
  return objects.filter((obj ) => obj[property] === value);
}

export default filterObjectsByProperty;