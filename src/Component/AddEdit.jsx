import Button from './Button'
import TextField from './Textfield'

const AddEdit = (props) => {
    const {values, submit, clear, handleClear, handleSubmit, handleChange, errors} = props

    return (
        <div className='container mx-auto py-5'>
            <form onSubmit={handleSubmit}>
                <div className='bg-white p-5 w-full rounded-lg shadow mx-auto'>
                    <TextField
                        value={values.name}
                        label={"Name"}
                        onChange={handleChange}
                        inputProps={{type: 'text', name: 'name', placeholder: 'Enter Name'}}
                        autofocus="autofocus"
                    />
                    {errors.name && <p className="error text-red-500 text-xs mt-1">{errors.name}</p>}
                    <TextField
                        value={values.email}
                        label={"Email"}
                        name={"email"}
                        onChange={handleChange}
                        inputProps={{type: 'email', name: 'email', placeholder: 'Enter Email'}}
                    />
                    {errors.email && <p className="error text-red-500 text-xs mt-1">{errors.email}</p>}
                    <TextField
                        value={values.contact}
                        label={"Contact"}
                        onChange={handleChange}
                        inputProps={{type: 'tel', name: 'contact', placeholder: 'Enter Contact'}}
                    />
                    {errors.contact && <p className="error text-red-500 text-xs mt-1">{errors.contact}</p>}
                    <TextField
                        value={values.address}
                        label={"Address"}
                        onChange={handleChange}
                        inputProps={{type: 'text', name: 'address', placeholder: 'Enter Address'}}
                    />
                    {errors.address && <p className="error text-red-500 text-xs mt-1">{errors.address}</p>}
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