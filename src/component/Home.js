import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, deleteTodo } from './redux/TodoSlice';

const Home = () => {
    const [fatchData, setFatchData] = useState(false);

    const dispatch = useDispatch();
    const { todos, todoLoading } = useSelector(state => state.todo)

    useEffect(() => {
        dispatch(getTodo())
    }, [fatchData])

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id));
    }
    //console.log()

    return (
        <>
            {todoLoading ? 'todoLoading...' :
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>email</th>
                                <th>first_name</th>
                                <th>last_name</th>
                                <th>&nbsp;</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.email}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td><button className='btn btn-primary'>Edit</button></td>
                                        <td><button className='btn btn-danger' onClick={() => deleteHandler(item.id) }>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </>
            }


        </>
    )
}

export default Home
