import { useState } from 'react'

const AddHistory = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [insurance, setInsurance] = useState('')
   
    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add Patient History')
            return
        }
        
        onAdd({ name, age, weight, height, phone, address, insurance })

        setName('')
        setAge('')
        setWeight('')
        setHeight('')
        setPhone('')
        setAddress('')
        setInsurance('')
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Add Name' value={name} pattern='[A-Za-z]{}}' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Age</label>
                <input type='text' placeholder='Add Age' value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Weight</label>
                <input type='text' placeholder='Add Weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Height</label>
                <input type='text' placeholder='Add Height' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Phone Number</label>
                <input type='text' placeholder='Add Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Address</label>
                <input type='text' placeholder='Add Address' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Insurance</label>
                <input type='text' placeholder='Add Insurance' value={insurance} onChange={(e) => setInsurance(e.target.value)} />
            </div>

            <input type='submit' value='Save History' 
            className='btn btn-block' />
        </form>
    )
}

export default AddHistory