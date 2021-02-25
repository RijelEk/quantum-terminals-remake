import React from 'react'
import { Input, Label } from '@/UI/Inputs/FormInput'
import { Button } from '@/UI/Buttons/Primary'
import { Box } from '@/UI/Boxes/Box'
import { ErrorText } from '@/UI/Inputs/Error'

interface inputProps {
  label: string
  name: string
  placeholder: string
  id: number
  value: string
}

interface AuthFormProps {
  inputs: inputProps[]
  onSubmit: () => void
  onChange: (name: string, e: any) => void
  type: string
  loading?: boolean
}

const Auth: React.FC<AuthFormProps> = ({
  inputs,
  onSubmit,
  onChange,
  type,
  loading,
}) => {
  return (
    <form>
      {inputs.map((item) => (
        <Box key={item.id} mb={25}>
          <Box mb={10}>
            <Label>{item.label}</Label>
          </Box>
          <Input
            name={item.name}
            value={item.value}
            placeholder={item.placeholder}
            key={item.id}
            onChange={(e) => onChange(item.name, e)}
          />
        </Box>
      ))}
      <Box mt={40}>
        <Button
          text={loading ? 'Submitting' : type}
          onClick={() => onSubmit()}
        />
      </Box>
    </form>
  )
}

export default Auth
