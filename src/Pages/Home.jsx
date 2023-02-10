import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux"
import { loadContacts, addContact, deleteContact, editContact } from '../Redux/features/contactSlice'
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

import AddEdit from '../Component/AddEdit'
import ContactList from '../Component/ContactList'

const Home = () => {
    const [submit, setSubmit] = useState('Save')
    const [clear, setClear] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const contacts = useSelector((state) => state.contacts)
    const [values, setValues] = useState({
        id: '',
        name: '',
        email: '',
        contact:'',
        address:''
    })
    const { id, name, email, contact, address } = values

    const handleSubmit = (e) => {
        e.preventDefault()
            setValues({name: '',email: '', contact:'', address:''})
            setClear(true)
            setSubmit('Save')
            if (!id) {
                dispatch(addContact({...values, id: uuidv4()}))
                toast.success("Contact Added Successfully")
            } else {
                dispatch(editContact(values, id))
                toast.success("Contact Updated Successfully")
            }
    }

    useEffect(() => {
        dispatch(loadContacts())
    }, [dispatch])  

    const handleDelete = (id) => {
        if (
            window.confirm("Are you sure that you wanted to delete that contact ?")
        ) {
            dispatch(deleteContact(id))
            toast.success("Contact deleted successfully")
        }
    }

    const handleEdit = (contact) => {
        setSubmit('Update')
        setValues(contact)
        setClear(false)
    }

    const handleView = (id) => {
        navigate(`/view/${id}`)
    }

    const handleClear = (e) => {
        e.preventDefault()
        setClear(true)
        setSubmit('Save')
        setValues({name: '',email: '', contact:'', address:''})
    }

    return (
        <main className='flex justify-center items-center'>
            <div className="container mx-auto px-4">
                <div className="flex flex-row space-x-4">
                    <div className="w-1/4">
                        <AddEdit
                        clear={clear}  
                        submit={submit}
                        values={values}
                        setValues={setValues}
                        handleSubmit={handleSubmit}
                        handleClear={handleClear}
                        />
                    </div>
                    <div className="w-3/4">
                        <ContactList
                            contacts={contacts.datas}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            handleView={handleView}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home