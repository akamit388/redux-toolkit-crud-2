import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodo } from './redux/TodoSlice';


const Home = () => {
    const [fatchBooks, setfatchBooks] = useState(false);

    const dispatch = useDispatch();
    const {todos, todoLoading} = useSelector(state => state.todo);

    useEffect(()=>{
        dispatch(getTodo())
    }, [fatchBooks])

  return (
    <>
        {
            todoLoading ? 'Data Loading...' :
            <>
                <table>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>First Name </th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </>
        }
    </>
  )
}

export default Home
