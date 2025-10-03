const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2506-ftb-ct-web-pt";
const API = BASE_URL + COHORT;

export async function getList() {
  try {
    const response = await fetch(`${API}/guests`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("error getting List", error);
    throw error;
  }
}

export async function getListById(id) {
  try {
    const response = await fetch(`${API}/guests/${id}`);
  const result = await response.json();
  return result.data;
  } catch (error) {
    console.error("error fetching by ID", error);
    throw error;
  }
}

