/**
 * @author wendleypf <wendley.franca@ccc.ufcg.edu.br>
 */

import { useField } from '@unform/core'
import cx from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  name: string
  label?: string
}

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Props

const Input: React.FC<InputProps> = ({ name, label, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [touched, setTouched] = useState(false)
  const [readOnly, setReadOnly] = useState(true)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  const handleFocus = (e): void => {
    setReadOnly(false)
    e.target.readOnly = false
  }

  const handleTouch = (e): void => {
    setTouched(true)
  }

  return (<div className='form-group'>
    {label && <label htmlFor={fieldName} className={cx({
      'text-success': !error && touched,
      'text-danger': error && touched,
      '': !touched
    })}>{label}</label>}
    <input
      className={cx('form-control', {
        'is-valid': !error && touched,
        'is-invalid': error && touched,
        '': !touched
      })}
      id={fieldName}
      ref={inputRef}
      defaultValue={defaultValue}
      readOnly={readOnly}
      onFocus={e => handleFocus(e)}
      onBlur={e => handleTouch(e)}
      {...rest}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>)
}

export default Input
