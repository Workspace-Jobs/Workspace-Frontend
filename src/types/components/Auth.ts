import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface AuthInputProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegisterReturn
  isValue?: boolean
}

export interface AuthForm {
  email?: string
  password?: string
  passwordCheck?: string
}

export interface AuthBtnProps {
  text: string
  type: 'button' | 'submit'
  onClick?: () => void
}
