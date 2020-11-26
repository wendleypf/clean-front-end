/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { Input, LoginHeader, Spinner } from '@/presentation/components'
import { FormContext } from '@/presentation/contexts'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import React from 'react'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state, setState] = React.useState<StateProps>({ isLoading: false, errorMessage: '' })
  const formRef = React.useRef<FormHandles>(null)
  const handleSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data)
  }

  return (<div className='container'>
    <div className='row'>
      <div className='col-12'>
        <div className='card'>
          <LoginHeader/>
          <div className='card-body'>
            <FormContext.Provider value={state}>
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
            </FormContext.Provider>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
