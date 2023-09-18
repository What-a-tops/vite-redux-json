import React, {useEffect, useState, Suspense, lazy} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loadContacts, addContact, deleteContact, editContact } from '../Redux/features/contactSlice'
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import Validation from "../Component/Validation.jsx";

const AddEdit = lazy(() => import('../Component/AddEdit'))
const ContactList = lazy(() => import('../Component/ContactList'))

const Home = () => {
    const [submit, setSubmit] = useState('Save')
    const [clear, setClear] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const contacts = useSelector((state) => state.contacts)

    const initialValues = {
        id: '',
        name: '',
        email: '',
        contact:'',
        address:''
    }

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const { id, name, email, contact, address } = values

    const handleChange = (e) => {
        setClear(false)
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
        setIsSubmit(true)
    };

    const submitForms = () => {
        setValues(initialValues)
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
        if (Object.keys(errors).length === 0 && isSubmit) {
            submitForms()
        }
        dispatch(loadContacts())
    }, [dispatch, errors])

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
        navigate(`/${id}`)
    }

    const handleClear = (e) => {
        e.preventDefault()
        setClear(true)
        setSubmit('Save')
        setValues(initialValues)
    }

    return (
        <main className='flex justify-center items-center'>
            <div className="container mx-auto px-4">
                <Suspense fallback={
                        <div className="grid place-items-center h-screen text-white 2xl">
                            Loading...
                        </div>
                    }>
                    <div className="flex flex-row space-x-4">
                            <div className="w-1/4">
                                <AddEdit
                                    clear={clear}  
                                    submit={submit}
                                    values={values}
                                    setValues={setValues}
                                    handleSubmit={handleSubmit}
                                    handleClear={handleClear}
                                    handleChange={handleChange}
                                    errors={errors}
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
                </Suspense>
            </div>
        </main>
    )
}

export default Home