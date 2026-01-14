const habits = [
  { name: "Exercise", quote: "Health first, everything second.", done: false },
  { name: "Wake up early", quote: "Win the morning, win the day.", done: false },
  { name: "Study with focus", quote: "Consistency beats intelligence.", done: false },
  { name: "Revise lessons", quote: "Revision turns effort into mastery.", done: false },
  { name: "Practice English", quote: "Your words decide your world.", done: false },
  { name: "Read 10 pages", quote: "Readers become leaders.", done: false },
  { name: "Limit mobile usage", quote: "Control your phone, or it will control you.", done: false },
  { name: "Learn one skill", quote: "Skills give freedom.", done: false },
  { name: "Self-reflection", quote: "Self-reflection is self-correction.", done: false }
];

const habitList = document.getElementById("habitList");

const today = new Date().toDateString();
const savedDate = localStorage.getItem("date");

if (savedDate !== today) {
  localStorage.setItem("habits", JSON.stringify(habits));
  localStorage.setItem("date", today);
}

let storedHabits = JSON.parse(localStorage.getItem("habits")) || habits;

function renderHabits() {
  habitList.innerHTML = "";

  storedHabits.forEach((habit, index) => {
    const li = document.createElement("li");
    if (habit.done) li.classList.add("done");

    li.innerHTML = `
      <div class="habit-name">${habit.name}</div>
      <div class="quote">${habit.quote}</div>
    `;

    li.onclick = () => toggleHabit(index);

    habitList.appendChild(li);
  });
}

function toggleHabit(index) {
  storedHabits[index].done = !storedHabits[index].done;
  localStorage.setItem("habits", JSON.stringify(storedHabits));
  renderHabits();
}

renderHabits();
