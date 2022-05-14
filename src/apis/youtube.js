import axios from 'axios';

const KEY = 'AIzaSyBo3yZGeD5_3-jjisF1PjahZMzDic1s0Uk';

export default axios.create ({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params :{
        part : 'snippet',
        maxResults : 5,
        key : KEY,
        type : 'video'
        
    }
});

