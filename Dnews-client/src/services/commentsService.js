import * as request from '../services/apiService'

const apiUrl = 'http://localhost:3030/news/comments';


export const getAll = async (userID) => {
    const result = await request.get(`${apiUrl}?where=_ownerId%3D%22${userID}%22&sortBy=_createdOn%20desc`);
    return result
}


export const getAll1 = async (newsID) => {
    const query = new URLSearchParams({
        where: `newsID="${newsID}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${apiUrl}?${query}`);

    return result;
};

export const create = async (newsID, text) => {
    const newComment = await request.post(apiUrl, {
        newsID,
        text,
    });

    return newComment;
};
