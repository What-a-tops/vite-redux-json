import Button from './Button'
import TextField from './Textfield'

const AddEdit = (props) => {
    const {values, submit, clear, handleClear, handleSubmit, setValues} = props

    return (
        <div className='container mx-auto py-5'>
            <form onSubmit={handleSubmit}>
                <div className='bg-white p-5 w-full rounded-lg shadow mx-auto'>
                    <TextField
                        type="text"
                        label={"Name"}
                        value={values.name}
                        onChange={(e) => setValues({...values, name: e.target.value})}
                        inputProps={{type: 'text', placeholder: 'Enter Name'}}
                        autofocus="autofocus"
                        pattern="[a-zA-Z ]+"
                    />
                    <TextField 
                        type="email"
                        label={"Email"}
                        value={props.values.email}
                        onChange={(e) => setValues({...values, email: e.target.value})}
                        inputProps={{type: 'email', placeholder: 'Enter Email'}}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <TextField 
                        type="tel"
                        label={"Contact"}
                        value={values.contact}
                        onChange={(e) => setValues({...values, contact: e.target.value})}
                        inputProps={{type: 'contact', placeholder: 'Enter Contact'}}
                        pattern="[0-9,()-]*"
                    />
                    <TextField 
                        type="text"
                        label={"Address"}   
                        value={values.address}
                        onChange={(e) => setValues({...values, address: e.target.value})}
                        inputProps={{type: 'address', placeholder: 'Enter Address'}}
                    />
                    <Button 
                        isHidden=""
                        color="bg-gray"
                        type="submit"
                        >{submit}
                    </Button>  

                    <Button 
                        isHidden={clear ? 'hidden' : ''}
                        color="bg-red"
                        onClick={handleClear}
                        type="button"
                    >Clear</Button>
                </div>
            </form>
        </div>
    )
}

export default AddEdit