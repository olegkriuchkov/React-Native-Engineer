import axios from 'axios';

export const getPosts = async (currentPage) => {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${currentPage}`);
    
    return response.data;
}