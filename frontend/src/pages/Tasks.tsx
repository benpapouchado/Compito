
import React, { useEffect, useRef, useState } from 'react';

export default function Tasks() {
    const API_URL = "http://127.0.0.1:8080";

    const [tasks, setTasks] = useState([]);

    const fetchAllTasks = async () => {
        try {
            const response = await fetch(`${API_URL}/api/tasks/retrieve`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setTasks(data);

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchAllTasks();
    }, []);

    console.log("Tasks:", tasks);

    return (
        <main >
            <h1 className="title">TASKBOARD</h1>

            <div className="level-left is-fullwidth" style={{ margin: "1rem 0" }}  >
                <div className="level-item">
                    <p className="subtitle is-5"><strong>123</strong> tasks</p>
                </div>
                <div className="level-item">
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input" type="text" placeholder="Find a task" />
                        </p>
                        <p className="control">
                            <button className="button">Search</button>
                        </p>
                    </div>
                </div>
                <button className="button is-fullwidth" style={{
                    margin: "1rem 0",
                    color: "red",
                    backgroundColor: "var(--accent)"
                }}>All</button>
                <button className="button is-fullwidth" style={{
                    margin: "1rem 0",
                    color: "red",
                    backgroundColor: "var(--accent)"
                }}>TODO</button>
                <button className="button is-fullwidth" style={{
                    margin: "1rem 0",
                    color: "red",
                    backgroundColor: "var(--accent)"
                }}>In Progress</button>
                <button className="button is-fullwidth" style={{
                    margin: "1rem 0",
                    color: "red",
                    backgroundColor: "var(--accent)"
                }}>+ New Task</button>
            </div>



            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task: any) => (
                        <tr key={task.id}>
                            <td><label className="checkbox">
                                <input type="checkbox" />
                            </label></td>
                            <td>#{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td>{task.due_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}   
