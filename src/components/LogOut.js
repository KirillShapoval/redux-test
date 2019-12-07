import React  from 'react';
import {authLocalStorage} from '../reducers/auth';

const LogOut = (props) => {

  const handleSubmitLogOut = (e) => {
    e.preventDefault();
    props.setUserLogOut();
    localStorage.removeItem(authLocalStorage);
    // this.props.history.push('./login');
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogOut}>
        <input
          type='submit'
          value='Log Out'
        />
      </form>
    </div>
  )
};

export default LogOut;
