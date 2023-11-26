// import * as request from "../services/apiService";

// const apiUrl = "http://localhost:3030/users";

// export const purchase = (newsID, userId) => request.post(`${apiUrl}/purchases`, {newsID, userId});

// export const getALLPuchases = () => request.get(`${apiUrl}/purchases`);

// export const getBuyersOfProduct = async (productId) => {
//     const query = encodeURIComponent(`productId="${productId}"`);
    
//     const result = await  request.get(`${baseURL}/purchases?select=userId&where=${query}`)
//         .then(res => res.map(x => x.userId));

//         return result;
// };