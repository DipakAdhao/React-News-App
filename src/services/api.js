// api.js
const API_KEY = 'd4284547eca143d393f5c5e3b54dbfec';

export const getTopHeadlines = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};
