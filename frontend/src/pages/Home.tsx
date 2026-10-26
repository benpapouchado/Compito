export default function Home() {
    return (
        <main > 
            <h1 className="title">TASKBOARD</h1>

            <div className="is-flex is-justify-content-space-between" style={{ margin: "1rem 0" }}>
            <div className="box is-flex-grow-1 has-text-left">
                TODO
            </div>
            <div className="box is-flex-grow-1 has-text-left">
                In Progress
            </div>
            <div className="box is-flex-grow-1 has-text-left">
                Done
            </div>
            <div className="box is-flex-grow-1 has-text-left">
                Overdue
            </div>            
            </div>


    <div className="level-left">
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
    </div>



            <button className="button" style = {{ margin: "1rem 0", color: "red", backgroundColor: "var(--accent)" }}>+ New Task</button>

            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Task 1</td>
                        <td>Description of Task 1</td>
                        <td>In Progress</td>
                        <td>2024-06-30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Task 2</td>
                        <td>Description of Task 2</td>
                        <td>Completed</td>
                        <td>2024-07-05</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Task 3</td>
                        <td>Description of Task 3</td>
                        <td>Not Started</td>
                        <td>2024-07-10</td>
                    </tr>
                </tbody>
            </table>
        </main>
    );
}   
