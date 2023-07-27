import './ServerError.css'

export const ServerError = () => {
  return (
    <div className='server-error-container'>
      <div className='server-error-header'/>
      <div className='server-error-body'>
        <p className='server-error-message'>Looks like we are having issues with our server. Sorry!</p>
      </div> 
    </div>
  )
}