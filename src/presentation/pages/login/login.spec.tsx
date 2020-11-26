/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { render } from '@testing-library/react'
import React from 'react'

import Login from './login'

describe('Login Component', () => {
  test('Should not render spinner on start.', () => {
    const { getByTestId } = render(<Login/>)
    const spinner = getByTestId('spinner')
    expect(spinner.childElementCount).toBe(0)
  })
})
