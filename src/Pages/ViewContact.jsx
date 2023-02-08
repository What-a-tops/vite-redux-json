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
        <div className='grid h-screen place-items-center'>
            <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-white">
                <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
            <div className="flex justify-center -mt-8">
                <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" />		
            </div>
            <div className="text-center px-3 pb-6 pt-2">
                <h3 className="text-dark text-lg bold font-sans">{name}</h3>
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
                onClick={() => (navigate('/'))} 
                color="bg-red"
            >Back</Button>
        </div>
            
    </div>
    )
}

export default ViewContact