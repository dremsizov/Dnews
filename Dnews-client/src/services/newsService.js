import * as request from '../services/apiService'

const apiURL = "http://localhost:3030/data/news";

////////////////////////////// GET ALL REQUEST ////////////////////////
export const getAll = async () => {
  
  const result = await request.get(apiURL);

  const data = Object.values(result);

  return data;
};

///////////////////////// CREATEEEE ////////////////////
export const createNews = async (newsData) => {
    const result = await request.post(apiURL, newsData);

    return result;

    // const body = {
    //     title: newsData.title,
    //     newsInfo: newsData.newsInfo,
    //     type: newsData.type,
    //     image: newsData.image,
    //     _createdOn: new Date().toISOString,
    //     _updatedOn: new Date().toISOString,
    // }
}


///////////////////////////////////// Remove ////////////////////////////

export const removeNews = async (newsID) => {
    const result = await request.remove(`${apiURL}/${newsID}`);
    return result
}

//////////////////////////////////// Edit /////////////////////////

export const editNews = async (newsID, newsData) => {
    const result = await request.put(`${apiURL}/${newsID}`, newsData);
    return result
}

// GET ONE NEWS//////////////

export const getOneNews = async (newsID) => {
    const result = await request.get(`${apiURL}/${newsID}`);

    return result;
};




//////////////////////////////// Get Author NEWS ////////////////////

export const getOwnerNews = async (userID) => {
    const result = await request.get(`${apiURL}?where=_ownerId%3D%22${userID}%22&sortBy=_createdOn%20desc`);
    return result
}



////////////////////////////////////////// GET Category /////////////////////////////////////////////

export const getAllAnalitics = async () => {
    const categoryAnalitics = 'Aнализи'
    const itemQuery = new URLSearchParams({
        where: `category="${categoryAnalitics}"`,
    });
    const result = await request.get(`${apiURL}?${itemQuery}`);
    return Object.values(result)
}
