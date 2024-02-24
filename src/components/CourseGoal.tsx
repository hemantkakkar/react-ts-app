import { PropsWithChildren, type ReactNode } from "react"

// type CourseGoalProps = {
//     title: string, 
//     children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{id: number, title: string, onDeleteGoal:(id: number) => void}>
export default function CourseGoal({id, title, children, onDeleteGoal}: CourseGoalProps) {
    return (<article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDeleteGoal(id)}>Delete</button>
    </article>
    )
}
