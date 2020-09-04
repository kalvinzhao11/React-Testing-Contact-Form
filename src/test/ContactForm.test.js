import React from 'react'
import {render, screen, fireEvent, act} from '@testing-library/react'
import ContactForm from '../components/ContactForm'
    
test('Contact form can add new contact info', () =>{
    render(<ContactForm />)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /submit/i })

    fireEvent.change(firstNameInput, {target : {value : "kalvin"}})
    fireEvent.change(lastNameInput, {target : {value : "zhao"}})
    fireEvent.change(emailInput, {target : {value : "kalvinzhao11@gmail.com"}})
    fireEvent.change(messageInput, {target : {value : "12345678"}})

    expect(firstNameInput).toHaveValue('kalvin')
    expect(lastNameInput).toHaveValue('zhao')
    expect(emailInput).toHaveValue('kalvinzhao11@gmail.com')
    expect(messageInput).toHaveValue('12345678')

    fireEvent.click(submitButton)
})

test('Contact form can produce error message ', async () =>{
    render(<ContactForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    

    fireEvent.change(firstNameInput, {target : {value : "kalvin"}})
    fireEvent.change(lastNameInput, {target : {value : "zhao"}})
    fireEvent.change(emailInput, {target : {value : "kalvinzhao11@gmail.com"}})
    fireEvent.change(messageInput, {target : {value : "12345678"}})

    fireEvent.change(firstNameInput, {target : {value : ""}})
    fireEvent.change(lastNameInput, {target : {value : ""}})
    fireEvent.change(emailInput, {target : {value : ""}})
    fireEvent.change(messageInput, {target : {value : ""}})

    fireEvent.click(firstNameInput)
    fireEvent.click(lastNameInput)

    const sdf = screen.findByText(/Looks like there was an error:/i)
    // console.log(errorMessage)
    // expect(errorMessage).toBeInTheDocument()


    // expect((/Looks like there was an error:/i).toBeInTheDocument())
    // expect(lastNameInput).toHaveValue('zhao')
    // expect(emailInput).toHaveValue('kalvinzhao11@gmail.com')
    // expect(messageInput).toHaveValue('12345678')

})

test('contact form produces error when clicking submit', () => {
    render(<ContactForm />)
    // const submitButton = screen.getByRole('button', { name: /submit/i })
})