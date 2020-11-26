/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { render } from '@testing-library/react'
import React from 'react'

import Login from './login'

describe('Login Component', () => {
  test('Should not render spinner and submit button disabled non start.', () => {
    const { getByTestId } = render(<Login/>)
    const spinner = getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)

    const submit = getByTestId('submit') as HTMLButtonElement
    expect(submit.disabled).toBe(true)
  })
})
