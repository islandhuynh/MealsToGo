import camelize from "camelize";

export const locationRequest = async (searchTerm) => {
  try {
    const res = await fetch(
      `https://us-central1-mealstogo-f5ccd.cloudfunctions.net/geocode?address=${searchTerm}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("Location Request Error:", error);
  }
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
