/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { FormContext } from '@/presentation/contexts'
import React from 'react'

const Spinner: React.FC = () => {
  const { isLoading } = React.useContext(FormContext)
  return (<span data-testid='spinner'>{isLoading && <i className='fa fa-spinner fa-pulse fa-2x fa-fw'/>}</span>)
}

export default Spinner
