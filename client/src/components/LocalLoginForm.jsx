import { useState } from "react";
import { onLogin } from "../api/auth";
import {useDispatch} from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";


export default function LocalLoginForm() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const dispatch = useDispatch()

  const onSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const {data} = await onLogin(values);
      dispatch(authenticateUser());

      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('user', data.username);

    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  }

    return (
      <>
        <form onSubmit={(e) => onSubmit(e)}>

        <div>
          <label htmlFor='email'>
            Email address
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='email'
            id='email'
            name='email'
            value={values.email}
            placeholder='test@gmail.com'
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password'>
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='password'
            value={values.password}
            id='password'
            name='password'
            placeholder='password'
            required
          />
        </div>

        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>

        <button type='submit'>
          Submit
        </button>

        </form>
      </>
    );
  }