'use client'
import { Button, Form, Input } from 'antd'
import Link from 'antd/es/typography/Link'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { LockOutlined, UserOutlined, MailOutlined,PhoneOutlined,BankOutlined,NumberOutlined,IdcardOutlined } from '@ant-design/icons';

const RegisterPage = () => {
  const handleFinish = (value:any)=> {
    console.log(value)
  }
  return (
    <>
    <div className='mt-28 flex justify-center items-center' >
      <Title>Register</Title>
    </div>
    <div className='max-w-sm mx-auto mt-8'>
      <Form name='register' onFieldsChange={handleFinish}>
      
      <Form.Item 
      name="username"
      rules={[{ required: true, message: 'Please input your Username!' }]}>
      <Input prefix={<UserOutlined />} placeholder='User Name'/>
      </Form.Item>
      
      <Form.Item 
      name="password"
      rules={[{ required: true, message: 'Please input your Password!' }]}>
      <Input.Password prefix={<LockOutlined />} placeholder='Password'/>
      </Form.Item>
      
      <Form.Item 
      name="email"
      rules={[{ required: true, message: 'Please input your Email!' }]}>
      <Input prefix={<MailOutlined/>} placeholder='Email'/>
      </Form.Item>
      
      <Form.Item 
      name="phone"
      rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
      <Input prefix={<PhoneOutlined />} placeholder='Phone Number'/>
      </Form.Item>

      <Form.Item 
      name="accnum"
      rules={[{ required: true, message: 'Please input your Account Number!' }]}>
      <Input prefix={<BankOutlined />} placeholder='Account Number'/>
      </Form.Item>

      <Form.Item 
      name="bsb"
      rules={[{ required: true, message: 'Please input your BSB!' }]}>
      <Input prefix={<NumberOutlined />} placeholder='BSB'/>
      </Form.Item>
      
      <Form.Item 
      name="bankname"
      rules={[{ required: true, message: 'Please input your Bank Name!' }]}>
      <Input prefix={<IdcardOutlined />} placeholder='Bank Name'/>
      </Form.Item>

      <Form.Item>
      <Button type="primary" htmlType="submit">
        Register
      </Button>
      </Form.Item>
      </Form>
      
      <div>
      Already have an account? 
      <Link href='/login'>
      <Button type='link'>Click here to login!</Button>
      </Link>
      </div>

    </div>
    
    </>
  )
}

export default RegisterPage
