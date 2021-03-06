import { allPizzas } from "../redux/pizzaTypes";

const baseUrl = "http://localhost:3001/pizzas";

async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

export function getAllPizzas() {
  const allPizzasUrl = baseUrl + "/api/all_pizzas";
  console.log(`getAllPizzas ${allPizzasUrl}`);
  //   return fetch(allPizzasUrl).then((response) => response.json());
  return fetch(allPizzasUrl)
    .then(handleResponse)
    .catch(handleError)
    .catch((error) => {
      return allPizzas;
    });
}
