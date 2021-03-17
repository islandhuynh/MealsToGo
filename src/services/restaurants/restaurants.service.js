import camelize from "camelize";

export const restaurantsRequest = async (location) => {
  try {
    const res = await fetch(
      `https://us-central1-mealstogo-f5ccd.cloudfunctions.net/placesNearby?location=${location}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
