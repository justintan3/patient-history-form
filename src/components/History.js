import { FaTimes } from 'react-icons/fa'

const History = ({ history, onDelete }) => {
    return (
        <div className='history'> 
            <h3>
                {history.name} <FaTimes style={{ color: '#D6B7B5', cursor: 'pointer' }} onClick={() => onDelete(history.id)} />
            </h3>
            <p>W:{history.weight} H:{history.height} Age:{history.age}</p>
            <p>Phone: {history.phone} Insurance: {history.insurance}</p>
        </div>
    )
}


export default History
