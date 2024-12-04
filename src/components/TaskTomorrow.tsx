import { IonCard, IonCardTitle, IonInput } from '@ionic/react';
import './TaskTomorrow.css';


interface TaskProps {};

const TaskTomorrow:React.FC<TaskProps> = () => {
    return (
        <div>
            <IonCard>
                <IonCardTitle>Tomorrow</IonCardTitle>
                <IonInput label="Enter Tomorrows's Goal" labelPlacement='floating'/>
            </IonCard>
        </div>
    )
}

export default TaskTomorrow;
