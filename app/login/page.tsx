'use client'
import { Button, Form, Input } from 'antd'
import React from 'react'

const LoginPage = () => {
  return (
    <>
    <div>Teching Service System</div>
    <div>
      <Form name='login'>
        <Form.Item 
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input/>
      </Form.Item>
        <Form.Item 
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password/>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit">
        Login
      </Button>
        </Form.Item>
      </Form>
    </div>
    <div>
      Don't you have an account? Click here to create!
      </div>
    </>
  )
}

export default LoginPage
