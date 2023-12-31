import { api, requestConfig } from "../utils/config";

//publish an user photo
const publishPhoto = async(data, token) => {
     
    const config = requestConfig("POST", data, token, true);

    try {
        const res = await fetch(api + "/photos", config)
            .then((res) => res.json())
            .catch((err) => err);

            return res;
    } catch (error) {
        console.log(error);
    }
};

//get user photos
const getUserPhotos = async(id, token) => {

    const config = requestConfig("GET", null, token)

    try {
        const res = await fetch(api + "/photos/user/" + id, config)
          .then((res) => res.json())
          .catch((err) => err);

          return res;
    } catch (error) {
        console.log(error);
        
    }
};

// Get photo
const getPhoto = async (id, token) => {
  const config = requestConfig("GET", null, token);

  try {
    const res = await fetch(api + "/photos", config)
      .then((res) => res.json())
      .catch((err) => err);

    return res;
  } catch (error) {
    console.log(error);
  }
};

//delete a photo
const deletePhoto = async (id, token) => {
    const config = requestConfig("DELETE", "", token);

    try {
        const res = await fetch(api + "/photos/" + id, config)
            .then((res) => res.json())
            .catch((err) => err);
            
        return res;    
    } catch (error) {
        console.log(error);
    }
};

//update a photo
const updatePhoto = async (data, id, token) => {
    const config = requestConfig("PUT", data, token);
  
    try {
      const res = await fetch(api + "/photos/" + id, config)
        .then((res) => res.json())
        .catch((err) => err);
  
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  //like a photo 
  const like = async (id, token) => {
    const config = requestConfig("PUT", null, token)

    try {
      const res = await fetch(api + "/photos/like" + id, config)
        .then((res) => res.json())
        .catch((err) => err);

        return res;
    } catch (error) {
      console.log(error);
    }
  }

const photoService = {
    publishPhoto,
    getUserPhotos,
    getPhoto,
    deletePhoto,
    updatePhoto,
    like,
};

export default photoService;