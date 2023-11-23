// api/newsApi.js

const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = 'ac200c8a0d004c888b49853d50133760';

const fetchNewsData = async (query) => {
    try {
        const url = `${NEWS_API_URL}?q=${query}&apiKey=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch news data');
        }

        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('Error fetching news data:', error);
        return [];
    }
};

export { fetchNewsData };
