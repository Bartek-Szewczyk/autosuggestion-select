const url = "http://universities.hipolabs.com/search?name=";

export const getData = async (name) => {
  const response = await fetch(url + name);
  return response.json();
};
