/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { Input, LoginHeader, Spinner } from '@/presentation/components'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import React, { useRef } from 'react'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data)
  }

  return (<div className='container'>
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <LoginHeader/>
          <div className='card-body'>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                name='email'
                type='email'
                label='Email'
                placeholder='Enter email' />
              <Input
                name='password'
                type='password'
                label='Password'
                placeholder='Enter Password'/>
              <button type='submit' className='btn btn-primary btn-block'>Log in
                <Spinner/>
              </button>
              <a className='btn btn-link btn-block' href="">Create account</a>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
