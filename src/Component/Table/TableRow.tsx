import * as React from 'react';
import User from './../../Model/user';
import BaseComponent from './../BaseComponent';

interface RowProps {
  data: User;
  serialNumber: number;
}

class TableRow extends BaseComponent<RowProps, null> {

  doRender(): React.ReactElement<{}> {

    return (
      <tr>
      <td>{this.props.serialNumber}</td>
      <td>
          <figure className="avatar avatar-xl">
            <img src={this.props.data.avatarURL}/>
          </figure>
      </td>
      <td>{this.props.data.username}</td>
      <td>{this.props.data.points.recent}</td>
      <td>{this.props.data.points.allTime}</td>
      </tr>
    );
  }
}

export default TableRow;
