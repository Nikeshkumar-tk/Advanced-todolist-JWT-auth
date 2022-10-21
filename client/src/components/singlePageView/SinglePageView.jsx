import './SinglePageView.css'



const SinglePageView = ({todo}) => {
    

  return (
    <div className='desc-wrap'>

        <h4>{todo.name}</h4>

        <p>{todo.description}</p>
{
     todo.name != null &&   <button className="complete-btn">Completed</button>
}
    </div>
  )
}

export default SinglePageView