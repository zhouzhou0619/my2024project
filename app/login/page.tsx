'use client'
import { Button, Form, Input } from 'antd'
import Link from 'antd/es/typography/Link'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const LoginPage = () => {
  const handleFinish = (value:any)=> {
    console.log(value)
  }
  return (
    <>
    <div className='mt-28 flex justify-center items-center' >
      <Title>Teching Service System</Title>
    </div>
    <div className='max-w-sm mx-auto mt-8'>
      <Form name='login' onFieldsChange={handleFinish}>
        <Form.Item 
      
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input prefix={<UserOutlined />} placeholder='User Name'/>
      </Form.Item>
        <Form.Item 
        
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password prefix={<LockOutlined />} placeholder='password'/>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
        Login
      </Button>
        </Form.Item>
      </Form>
      <div>
      Don't you have an account? 
      <Link href='/register'>
      <Button type='link'>Click here to create!</Button>
      </Link>
      </div>
    </div>
    
    </>
  )
}

export default LoginPage
