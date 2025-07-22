import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Register() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validateInputs = () => {
    if (!firstName.trim()) return 'Please enter first name'
    if (!lastName.trim()) return 'Please enter last name'
    if (!email.trim()) return 'Please enter email'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email'
    if (!phone.trim()) return 'Please enter phone number'
    if (!/^[0-9]{10}$/.test(phone)) return 'Please enter a valid 10-digit phone number'
    if (!password) return 'Please enter password'
    if (!confirmPassword) return 'Please confirm password'
    if (password !== confirmPassword) return 'Passwords do not match'
    return null
  }

  const onRegister = () => {
    const error = validateInputs()
    if (error) {
      toast.warn(error)
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const userExists = users.some((user) => user.email === email)

    if (userExists) {
      toast.error('User with this email already exists')
      return
    }

    const newUser = { firstName, lastName, email, phone, password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    toast.success('Successfully registered!')
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Register</h2>
      <form onSubmit={(e) => { e.preventDefault(); onRegister() }} className='form'>
        <div className='mb-3'>
          <label>First Name</label>
          <input type='text' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label>Last Name</label>
          <input type='text' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input type='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label>Phone Number</label>
          <input type='tel' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className='mb-3'>
          <label>Confirm Password</label>
          <input type='password' className='form-control' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>

        <div className='mb-3'>
          <button type='submit' className='btn btn-success'>
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
