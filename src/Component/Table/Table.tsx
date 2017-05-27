import * as React from 'react';
import BaseComponent from './../BaseComponent';
import TableRow from './../Table/TableRow';
import User from './../../Model/user';

interface UsersProps {
  data: User[];
  cb: Function;
};

class Table extends BaseComponent<UsersProps, null> {

  doRender(): React.ReactElement<{}> {

    return (
      <table className="table table-stripped table-hover drop">
      <thead>
        <tr>
        <th> S/N</th>
        <th>Avatar </th>
        <th> Username</th>
        <th onClick={() => this.props.cb('recent')}> Recent points(Click to toggle)</th>
        <th onClick={() => this.props.cb('alltime')}>All time points (Click to toggle)</th>
        </tr>
      </thead>
      <tbody>
      {this.props.data.map((currentUser: User, index: number) => {
        return(<TableRow data={currentUser} serialNumber={index} />);
      })}
      </tbody>
      </table>
    );
  }
}

export default Table;
