import Button from './Button'
import TextField from './Textfield'

const AddEdit = (props) => {
    return (
        <div className='container mx-auto py-5'>
            <div className='bg-white p-5 w-full rounded-lg shadow mx-auto'>
                <TextField 
                    label={"Name"}
                    value={props.values.name}
                    onChange={(e) => props.setValues({...props.values, name: e.target.value})}
                    inputProps={{type: 'text', placeholder: 'Enter Name'}}
                    autofocus="autofocus"
                />
                <TextField 
                    label={"Email"}
                    value={props.values.email}
                    onChange={(e) => props.setValues({...props.values, email: e.target.value})}
                    inputProps={{type: 'email', placeholder: 'Enter Email'}}
                />
                <TextField 
                    label={"Contact"}
                    value={props.values.contact}
                    onChange={(e) => props.setValues({...props.values, contact: e.target.value})}
                    inputProps={{type: 'contact', placeholder: 'Enter Contact'}}
                />
                <TextField 
                    label={"Address"}   
                    value={props.values.address}
                    onChange={(e) => props.setValues({...props.values, address: e.target.value})}
                    inputProps={{type: 'address', placeholder: 'Enter Address'}}
                />
                <Button 
                    color="bg-indigo"
                    onClick={props.handleAddEditUser}>{props.submit}</Button>  

                <Button 
                    isHidden={props.clear ? 'hidden' : ''}
                    color="bg-red"
                    onClick={props.handleClear}
                >Clear</Button>
            </div>
        </div>
    )
}

export default AddEdit