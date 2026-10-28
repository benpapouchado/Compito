import "bulma/css/bulma.min.css";
import "../App.css";
import React, { useEffect, useRef, useState } from 'react';

export function CreateTaskModal({ setSelectedTaskButton, }: { setSelectedTaskButton: (value: string) => void; }) {

    const API_URL = "http://127.0.0.1:8080";

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [dueDate, setDueDate] = useState("");

    const createNewTask = async () => {
        try {
            const response = await fetch(`${API_URL}/api/tasks/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title, description: description,
                    status: status, dueDate: dueDate
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log(response.status);
            console.log("task created");

        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };


    return (
        <div className="modal is-active">
            <div className="modal-background"
                onClick={() => setSelectedTaskButton("")}></div>
            <div className="box custom-modal">
                <header >
                    <h3 className="modal-card-title">New task</h3>
                </header>
                <section className="modal-card-body">
                    <div className="mb-4">Add it to the board with a status and a due date</div>

                    <div className="field">
                        <label className="label ">Title</label>
                        <div className="control">
                            <input className="input"
                                type="text"
                                placeholder="What needs doing?"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <textarea className="textarea"
                                placeholder="Optional details"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}                            ></textarea>
                        </div>
                    </div>


                    <div className="field">
                        <label className="label">Status</label>
                        <div className="control">
                            <label className="radio mr-4">
                                <input
                                    type="radio"
                                    name="status"
                                    value="In Progress"
                                    checked={status === "In Progress"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                In Progress
                            </label>

                            <label className="radio mr-4">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Done"
                                    checked={status === "Done"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                Done
                            </label>

                            <label className="radio mr-4">
                                <input
                                    type="radio"
                                    name="status"
                                    value="Todo"
                                    checked={status === "Todo"}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                                Todo
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                            <div>
                                <input aria-label="Due date time"
                                    type="datetime-local"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)} />
                            </div>
                        </div>
                    </div>

                </section>
                <footer >
                    <div className="buttons">
                        <button className="button is-success" onClick={() => createNewTask}>Create task</button>
                        <button className="button" onClick={() => setSelectedTaskButton("")}>Cancel</button>
                    </div>
                </footer>
            </div>
        </div>
    );
}