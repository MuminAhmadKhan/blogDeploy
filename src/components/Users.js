import {React,useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { allUsers } from '../Reducers/usersReducer'


const Users = () => {
    
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(allUsers())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const users = useSelector(state=>state.users)
    console.log(users)
    
  return (
    <div>
        {users.map(user => 
        <div key = {user._id} >
            <p> <Link to = {`/users/${user._id}`} >{user.name}</Link> has written {user.blogs.length} blogs </p>
        </div>
        )}
    </div>
  )
}

export default Users