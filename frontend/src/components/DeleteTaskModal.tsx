

export function DeleteTaskModal ({
    setSelectedTaskButton,
    // fetchAllTasks,
} : {
    setSelectedTaskButton: (value: string) => void;
    // fetchAllTasks: () => void;
})  {





    return (
        <div className="modal is-active">
            <div className="modal-background"
                onClick={() => setSelectedTaskButton("")} /
            >

            <div className="modal-card custom-modal">

                <section className="modal-card-body">
                    <header >
                        <h3 className="modal-card-title md-2 text-align-left"><strong>Delete task</strong></h3>
                    </header>

                    <div className="my-4">
                        <button
                            className="button is-rounded"
                            // onClick={createNewTask}
                            style={{
                                backgroundColor: "#7e1212",
                                color: "white",
                            }}>
                            Delete task
                        </button>
                        <button
                            className="button is-rounded"
                            onClick={() => setSelectedTaskButton("")}>
                            Cancel
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}