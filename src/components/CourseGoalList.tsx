import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App"
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals: CGoal[],
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList ({goals, onDeleteGoal}: CourseGoalListProps) {
    if(goals.length === 0) {
        return (<InfoBox mode="hint"> You have no goals yet</InfoBox>)
    }
    let warningBox: ReactNode

    if(goals.length>=4){
        warningBox = <InfoBox mode="warning" severity="medium">You have lot of goals, Don't put too much on your plate</InfoBox>
    }
    return (
        <>
        {warningBox}
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
        </>
    )
}