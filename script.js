document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const userForm = document.getElementById('user-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const userInfo = document.getElementById('user-info');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const timeAdded = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
            const timeSpan = document.createElement('span');
            timeSpan.textContent = ` (Ajoutée à ${timeAdded})`;
            timeSpan.className = 'time';

            const deleteButton = document.createElement('span');
            deleteButton.textContent = '✖';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(timeSpan);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    });

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        if (username !== '' && email !== '') {
            userInfo.innerHTML = `<p><strong>Nom d'utilisateur :</strong> ${username}</p>
                                  <p><strong>Email :</strong> ${email}</p>
                                  <button id="edit-user">Modifier</button>`;
            userForm.style.display = 'none';

            const editUserButton = document.getElementById('edit-user');
            editUserButton.addEventListener('click', () => {
                userForm.style.display = 'block';
                userInfo.innerHTML = '';
                usernameInput.value = username;
                emailInput.value = email;
            });
        }
    });
});
