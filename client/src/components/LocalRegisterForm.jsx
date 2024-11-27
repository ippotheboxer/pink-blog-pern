import { useState } from "react";
import { onRegistration } from "../api/auth";

export default function LocalRegisterForm() {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: ''
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data} = await onRegistration(values);
      setError('');
      setSuccess(data.message);
      setValues({
        email: '',
        username: '',
        password: ''
      });
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
      setSuccess('');
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
            className='form-control'
            id='email'
            name='email'
            value={values.email}
            placeholder='test@gmail.com'
            required
          />
        </div>

        <div>
          <label htmlFor='username'>
            Username
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='username'
            className='form-control'
            id='username'
            name='username'
            value={values.username}
            placeholder='Display name'
            required
          />
        </div>

        <div>
          <label htmlFor='password'>
            Password
          </label>
          <input
            onChange={(e) => onChange(e)}
            type='password'
            value={values.password}
            className='form-control'
            id='password'
            name='password'
            placeholder='password'
            required
          />
        </div>

        <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
        <div style={{ color: 'green', margin: '10px 0' }}>{success}</div>

        <button type='submit' className="post">
          Submit
        </button>

        </form>
      </>
    );
  }