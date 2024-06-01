const getState = ({ getState, setState }) => {
    return {
        state: {
            user: {
                name: 'John Doe',
                loggedIn: false
            },
            tasks: []
        },
        actions: {
            login: (name) => {
                setState({ user: { name, loggedIn: true } });
            },
            logout: () => {
                setState({ user: { name: '', loggedIn: false } });
            },
            addTask: (task) => {
                const state = getState();
                setState({ tasks: [...state.tasks, task] });
            },
            loadSomeData: () => {
                // Simulate a data load
                setTimeout(() => {
                    setState({
                        tasks: [
                            { id: 1, label: 'Task 1', done: false },
                            { id: 2, label: 'Task 2', done: false }
                        ]
                    });
                }, 1000);
            }
        }
    };
};

export default getState;