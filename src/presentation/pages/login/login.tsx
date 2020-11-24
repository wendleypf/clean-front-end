/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { Logo, Spinner } from '@/presentation/components'
import React from 'react'

const Login: React.FC = () => {
  return (<div className='container'>
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header text-center'>
            <Logo/>
            <h4>4Dev - Enquetes para Programadores</h4>
          </div>
          <div className='card-body'>
            <form autoComplete='false'>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter email'/>
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password'
                  className='form-control'
                  id='password'
                  placeholder='Enter Password'/>
              </div>
              <button type='submit' className='btn btn-primary btn-block'>Log in
                <Spinner/>
              </button>
              <a className='btn btn-link btn-block' href="">Create account</a>
            </form>
          </div>
          <div className='card-footer text-muted'>2 days ago</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
