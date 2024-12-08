const BASE_URL = "https://6721179d98bbb4d93ca76b6f.mockapi.io/api/todo-list";

export async function fetchCoverageDetails() {
  try {
    const response = await fetch(`${BASE_URL}/coverage-details`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch coverage details: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching coverage details:", error);
    throw error;
  }
}

export async function fetchInitialCoverageData() {
  try {
    const response = await fetch(`${BASE_URL}/initial-coverage-data`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch coverage details: ${response.statusText}`
      );
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error("Error fetching coverage details:", error);
    throw error;
  }
}
