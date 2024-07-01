import api from '@/api/api';

const imageURL = 'https://image.tmdb.org/t/p/w500';

const getSeriesID = (id:number) =>{
    const response = api.get(`/tv/${id}`);
    return response;
}


export default {
    imageURL,
    getSeriesID
}