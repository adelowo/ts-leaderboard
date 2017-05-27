import User from './../../Model/user';
import axios, {AxiosResponse} from 'axios';
import ClientInterface from './../../Services/Http/client';

class AxiosClient implements ClientInterface {

  get(url: string, config: {}): Promise<User[]> {

    return axios.get(url, config)
    .then((res: AxiosResponse) => {
      if (res.status !== 200) {
        throw new Error('An error occurred while trying to fetch ' +
      'the users from the API') ;
      }

      return res.data;
    })
    .then((json: any) => json.map((current: any) => {
      return {
        username: current.username,
        avatarURL: current.img,
        points: {
          allTime : current.alltime,
          recent: current.recent
        },
        lastUpdated: current.lastUpdate
      };
    }) as User[]);
  }
}

export default AxiosClient;
