import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App"

type CourseGoalListProps = {
    goals: CGoal[],
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList ({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal
                        id={goal.id}
                        title={goal.title}
                        onDeleteGoal={onDeleteGoal}>
                        <p>{goal.desc}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}