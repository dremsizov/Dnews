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



////////////////////////////////////////////////////// GET ONE NEWS//////////////

export const getOneNews = async (newsID) => {
    const result = await request.get(`${apiURL}/${newsID}`);

    return result;
};


//////////////////////////////////////////////// GET LAST 3 NEWS //////////////////////////////////////////

export const getLastTreeNews = async () => {
    const query = new URLSearchParams('offset=0&pageSize=3');
    const result = await request.get(`${apiURL}?sortBy=_createdOn%20desc&${query}`);

    return result;
};




//////////////////////////////// Get Author NEWS ////////////////////

export const getOwnerNews = async (userID) => {
    const result = await request.get(`${apiURL}?where=_ownerId%3D%22${userID}%22&sortBy=_createdOn%20desc`);
    return result
}



////////////////////////////////////////// GET Category /////////////////////////////////////////////


   
///// България

export const getAllBG = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'България');
    return data;
}

////// СВЯТ

export const getAllWorld = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Свят');
    return data;
}

/// ПОЛИТИКА

export const getAllPolitics = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Политика');
    return data;
}

///// Икономика

export const getAllEconomics = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Икономика');
    return data;
}

// СПОРТ
export const getAllSports = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Спорт');
    return data;
};


///// Любопитно

export const getAllLifeStyles = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Любопитно');
    return data;
};


///// АНАЛИЗИ
export const getAllAnalitics = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();

    const data = Object.values(result).filter(product => product.category == 'Анализи');
    return data;
}


