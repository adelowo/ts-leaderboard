import * as React from 'react';
import BaseComponent from './BaseComponent';
import Table from './Table/Table';
import User from './../Model/user';
import HTTPClient from './../Services/Http/client';

interface LeaderBoardProps {
  client: HTTPClient;
};

interface LeaderState {
  data: User[];
}

class LeaderBoard extends BaseComponent<LeaderBoardProps, LeaderState> {

  constructor(props: LeaderBoardProps) {
    super(props);
    this.state = {data: []};
    this.fetchCampers = this.fetchCampers.bind(this);
    this.fetchCampers();
  }

  doRender(): React.ReactElement<{}> {

    if (this.state.data.length === 0) {
      return (
        <div className="loading loading-indicator" />
      );
    }

    return (
      <div>
        <Table data={this.state.data} cb={this.fetchCampers}/>
      </div>
    );
  }

  fetchCampers(sortType: string = 'recent'): void {
    var url: string = 'https://fcctop100.herokuapp.com/api/fccusers/top/' + sortType;

    this.setState({data: []}); // Show the loading element

    this.props.client.get(url, {})
    .then((users: User[]) => {
      this.setState({data: users});
    });
   }
}

export default LeaderBoard;
