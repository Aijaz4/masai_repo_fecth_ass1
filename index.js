
const todosContainer = document.getElementById('fatch-container');

// Fetch todos from the API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(displaydata => {
        displaydata.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = ` ${todo.title} ${todo.completed ? '⬜' : '☑'}`;
            todosContainer.appendChild(todoItem);
        });
    })
    .catch(error => {
        console.error('Error fetching todos:', error);
    });
