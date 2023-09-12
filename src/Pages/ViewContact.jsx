import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { loadContact } from '../Redux/features/contactSlice'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../Component/Button';

const ViewContact = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const contacts = useSelector(state => state.contacts)

    const {name, email, contact, address} = contacts.data

    useEffect(() => {
        dispatch(loadContact(id))
    }, [dispatch, id])

    return (
        <div className='grid mt-10 place-items-center'>
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs bg-white">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
            <div className="flex justify-center -mt-8">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="bg-white shadow w-10 h-10 rounded-full border-solid border-white border-2 -mt-3">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                </svg>

            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-dark text-lg bold font-sans">{name.toUpperCase()}</h3>
                <p className="mt-2 font-sans font-light text-dark">{email}</p>
            </div>
            <div className="flex justify-center font-light pb-3 text-dark">
                <div className="text-center mr-3 border-r pr-3">
                    <span>{contact}</span>
                </div>
                <div className="text-center">
                    <span>{address}</span>
                </div>
            </div>
            <Button 
                isHidden=''
                onClick={() => (navigate('/vite-redux-json/'))}
                color="bg-red"
                type="button"
            >Back</Button>
        </div>
            
    </div>
    )
}

export default ViewContact