import { IonCard, IonCardTitle, IonInput } from '@ionic/react';
import './TaskToday.css';


interface TaskProps {};

const TaskToday:React.FC<TaskProps> = () => {
    return (
        <div>
            <IonCard>
                <IonCardTitle>Today</IonCardTitle>
                <IonInput label="Enter Today's Goal" labelPlacement='floating'/>
            </IonCard>
        </div>
    )
}

export default TaskToday;
