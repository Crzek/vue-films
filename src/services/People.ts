import api from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getPeopleID = (id:number) =>{
    const response = api.get(`/person/${id}`);
    return response;
}

export default {
    imageURL,
    getPeopleID
}