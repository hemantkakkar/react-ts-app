import CourseGoal from "./components/CourseGoal";
import goalsImage from "./assets/goals.jpg"
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export interface CourseGoal {
  title: string,
  desc: string,
  id: number
}

export default function App() {
  const[goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal:string, summary: string){
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        desc: summary,
        id: Math.random()
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id!== id))
  }

  return <main>
    <Header image={{src: goalsImage, alt: 'A list of goals'}}>
      <h1>Your Cousre Goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}></CourseGoalList>

  </main>
}
