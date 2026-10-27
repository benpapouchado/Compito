export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="title">Dashboard</h1>

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
        </div>
    );
}