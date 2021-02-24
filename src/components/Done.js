import { Link } from 'react-router-dom'


const Done = ({ onAdd, showAdd }) => {
    return (
        <div>
            <button className='submit'><Link to='/ThankYou' className='donelink'>Done</Link></button>
            <button className='submit'><Link to='/' className='donelink'>Go Back</Link></button>
        </div>
    )
}
export default Done

