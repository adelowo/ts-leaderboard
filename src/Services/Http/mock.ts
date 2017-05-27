import User from './../../Model/user';
import ClientInterface from './../../Services/Http/client';

class MockClient implements ClientInterface {
  get(url: string, config: {}): Promise<User[]> {
    return Promise.resolve(this.dummyUsers());
  }

  dummyUsers(): User[] {
    return [
      {
        username: 'Horus',
        avatarURL: 'github.com/human.jpg',
        lastUpdated: '2017-06-27',
        points: {
          allTime: 1000,
          recent: 39
        }
      },
      {
        username: 'Zeus',
        avatarURL: 'github.com/human.jpg',
        lastUpdated: '2017-06-27',
        points: {
          allTime: 1200,
          recent: 42
        }
      }
    ];
  }

}

export default MockClient;
