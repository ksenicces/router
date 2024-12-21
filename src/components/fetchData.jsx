const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ошибка");
    return await response.json();
  };
  
  export default fetchData;