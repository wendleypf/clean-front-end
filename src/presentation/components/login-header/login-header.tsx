/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { Logo } from '@/presentation/components'
import React, { memo } from 'react'

const LoginHeader: React.FC = () => {
  return (<div className='card-header text-center'>
    <Logo/>
    <h4>4Dev - Enquetes para Programadores</h4>
  </div>)
}

export default memo(LoginHeader)
