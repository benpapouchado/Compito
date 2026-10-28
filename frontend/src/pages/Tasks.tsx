import React, { useEffect, useRef, useState } from 'react';
import { CreateTaskModal } from '../components/Modal';

import "bulma/css/bulma.min.css";
import "../App.css";

export default function Tasks() {
    const API_URL = "http://127.0.0.1:8080";

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);
    const [selectedTaskButton, setSelectedTaskButton] = useState<string | null>(null);
    const [selectedFilterButton, setSelectedFilterButton] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [searchID, setSearchID] = useState('');
    const [deleteID, setDeleteID] = useState([]);

    const taskActions = {
        newTask : "+ New Task",
        delete : "\u2716 Delete Task" 
    };

    const taskButton = (label: string) =>
        <div className="level-item">
            <button className="button is-fullwidth is-responsive is-rounded" 
            style={{
                color: "white",
                backgroundColor: "#7e1212",
            }}
            onClick={() => setSelectedTaskButton(label)}>
            {label}
        </button>
    </div>

    const filterButton = (label: string) =>
        <button
            key={label}
            className={"button is-fullwidth is-responsive is-rounded "}
            style={{
                color: label === selectedFilterButton ? "white" : "black",
                backgroundColor: label === selectedFilterButton ? "#7e1212" : "white",
            }}
            onClick={() => setSelectedFilterButton(label)}>
            {label}
        </button>

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
            setCount(data.length);
            setTasks(data);

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    useEffect(() => {
        fetchAllTasks();
    }, []);

    return (
        <main >
            <section>
            {selectedTaskButton === taskActions.newTask && <CreateTaskModal
            setSelectedTaskButton={setSelectedTaskButton}/>}
            </section>

            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h1 className="title">TASKS</h1>
                    </div>
                </div>

                <div className="level-right">
                    {taskButton(taskActions.newTask)}
                    {taskButton(taskActions.delete)}
                </div>
            </div>


            <div className="columns is-vcentered">
                <div className="column is-narrow">
                    <p className="subtitle is-5">
                        <strong>{count}</strong> tasks
                    </p>
                </div>

                <div className="column is-narrow">
                    <div className="field has-addons">
                        <p className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="Find a task"
                            />
                        </p>
                        <p className="control">
                            <button className="button">Search</button>
                        </p>
                    </div>
                </div>

                <div className="column">
                    <div className="columns is-variable is-2">
                        <div className="column">
                            {filterButton("All")}
                        </div>
                        <div className="column">
                            {filterButton("TODO")}
                        </div>
                        <div className="column">
                            {filterButton("In Progress")}
                        </div>
                        <div className="column">
                            {filterButton("Done")}
                        </div>
                    </div>
                </div>
            </div>


            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th><label className="checkbox">
                            <input type="checkbox" />
                        </label></th>
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
                            <td>{task.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}   
