import { HORROR_MOVIE, RECOMMENDED_MOVIE, TOP_MOVIE ,LATEST_MOVIE} from "./action";

const initialstate = {
    recMovie: [],
    horrorMovie:[],
    topMovie:[],
    latestMovie:[]
}

export const movieListreducer = (store = initialstate,{type,payload}) => {
    switch(type){
        case RECOMMENDED_MOVIE:
            // console.log("hii");
            return {...store,recMovie:[...payload]}

        case HORROR_MOVIE:
            return {...store,horrorMovie:[...payload]}

        case TOP_MOVIE:
            return {...store,topMovie:[...payload]}

        case LATEST_MOVIE:
            return {...store,latestMovie:[...payload]}

        default:
            return store
    }
}