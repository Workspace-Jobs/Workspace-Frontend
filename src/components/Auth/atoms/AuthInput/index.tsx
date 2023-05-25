import * as S from './style'
import { useState } from 'react'
import { AuthInputProps } from 'types'
import { EyeCloseIcon, EyeIcon } from 'assets/svg'

const AuthInput = ({
  register,
  type,
  placeholder,
  maxLength,
  isValue,
  onSubmit,
  readOnly,
}: AuthInputProps) => {
  const [hidePW, setHidePW] = useState(false)

  const handelIcon = () => setHidePW((e) => !e)

  return (
    <S.AuthInput onSubmit={onSubmit}>
      <label>
        <input
          {...register}
          readOnly={readOnly}
          placeholder={placeholder}
          type={hidePW ? 'text' : type}
          maxLength={maxLength}
        />
        {isValue && type === 'password' && (
          <div onClick={handelIcon}>
            {hidePW ? <EyeIcon /> : <EyeCloseIcon />}
          </div>
        )}
      </label>
    </S.AuthInput>
  )
}

export default AuthInput
