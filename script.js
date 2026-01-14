// Load completed habits from localStorage
const habits = document.querySelectorAll('.habit-block');

habits.forEach(habit => {
  const id = habit.dataset.id;
  const completed = localStorage.getItem(id) === 'true';
  if (completed) habit.classList.add('completed');

  // Click event to toggle completion
  habit.addEventListener('click', () => {
    habit.classList.toggle('completed');
    const isCompleted = habit.classList.contains('completed');
    localStorage.setItem(id, isCompleted);
  });
});

// RESET BUTTON
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  habits.forEach(habit => {
    habit.classList.remove('completed');
    localStorage.removeItem(habit.dataset.id);
  });
  alert("All habits have been reset!");
});
