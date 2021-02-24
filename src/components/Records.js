import History from './History'

const Records = ({ records, onDelete }) => {
    return (
        <>
            {records.map((history, index) => (
                <History 
                    key={index} 
                    history={history} 
                    onDelete={onDelete} 
                />
            ))}   
        </>
    )
}

export default Records
