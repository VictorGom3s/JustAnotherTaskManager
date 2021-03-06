# 🖊️ Just Another Task Manager 📓

> A simple task manager and pomodoro timer that stores data in the browser's IndexedDB. Made using React and Dexie.js.

![App's UI](justanothertaskmanager.png)

### Access the app running live: [Just Another Task Manager](https://justanothertaskmanager.herokuapp.com/)

---

## Features

There isn't much yet:

- Create tasks
- Delete tasks
- Edit tasks
- Mark task as finished
- Pomodoro Timer
- Set priorities for each task
- Delete all tasks

## How to use

### Tasks

- Type your task and hit enter
- You can add a priority to the task using @ followed by the priority keyword. e.g “Write a blog post @today”
- There are four different priorities to be assigned to a task: today, low, high, critical.
- You can double-click the task or click the edit button to edit the task name.
- You can click the thrash button above the task's list to delete all tasks at once.
- You can click the thrash button next to the task's to delete a task.
- Click the checkbox to complete a task.

### Pomodoro Timer

- There are five buttons near the Timer. The three below the timer let you start, stop and reset the timer, respectively.
- Next to the timer, there are two more buttons. Use them to increase or decrease the time
- In the upper-right corner you'll find a button leading you to the Wikipedia's Pomodoro Timer article, in case you want to learn more about this technique.

## To Do

- [x] Notifications
- [x] Pomodoro Timer
- [x] Task priority
- [ ] Change the sound alert when the sprint is over.
- [ ] Automatically set the next sprint's duration.
- [ ] Integrate with youtube or some music streaming app to include the option to listen to lo-fi songs while sprinting.
- [ ] Make changes to improve general usability.

---

## To run locally 🚀

1. Clone the repository:

   ```
   $ git clone https://github.com/VictorGom3s/JustAnotherTaskManager.git
   ```

2. Navigate to the app folder:

   ```
   $ cd JustAnotherTaskManager
   ```

3. Install the dependencies:

   ```
   $ npm install
   ```

4. Run the app:
   ```
   $ npm run start
   ```

---

#### Made in React, for learning purposes.
