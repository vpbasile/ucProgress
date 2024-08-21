import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../../appStore';
import DisplayFormEdit from '../../DisplayFormEdit';
import { Ttask } from '../../types';
import DisplayTasks from './DisplayTasks';

export default function UCProgress() {

    // TODO

    // Import and export data
    // ---------------------------------------------

    // // Import data from a file
    // function importData() {
    //     // TODO
    // }
    // // Export data to a file
    // function exportData() {
    //     // TODO
    // }

    // <><> State management
    // ---------------------------------------------
    // Choose status from a list.
    // Choose grouping from a list.
    // Remember and change sort
    // Add multiple links to each task
    // // Button, form to add link
    // // Button to remove link
    // Add a new task
    // // Button, form to add task
    // // Button to remove task


    // Placeholder
    const dummyTask: Ttask = { uid: -1, description: "", loe: "", status: "", completionDate: "", comments: "", nextSteps: "", group: "" };


    //  Redux state management
    const taskData = useAppSelector((state: RootState) => state.taskList);
    const dispatch = useAppDispatch();

    // Management for states local to this component
    const views = ["Focus", "Progress Report"];
    const [view, setView] = useState(views[0]);
    const [editTaskID, setEditTaskID] = useState(-1);

    // Main Return
    return <Box>
        <ButtonGroup>
            <Button onClick={() => {
                // Cycle through the views
                const currentIndex = views.indexOf(view);
                setView(views[((currentIndex + 1) % views.length)]);
            }}>{view}</Button>
            {/* <Button onClick={importData}>Import</Button>
            <Button onClick={exportData}>Export</Button> */}
            {/* New Task button that calls the dispatch */}
            <Button onClick={() => {
                console.log("Add button clicked");
                dispatch({ type: "taskList/addTask", payload: dummyTask });
                // TODO Figure out the UID and set it to the editTaskID
                setEditTaskID(taskData[taskData.length - 1].uid);
            }}>New Task</Button>
        </ButtonGroup>
        <DisplayTasks taskArray={taskData} viewMode={view} setEditTaskID={setEditTaskID} />
        <DisplayFormEdit isEditing={editTaskID != -1} clearEditTaskID={() => setEditTaskID(-1)} task={taskData.find(task => task.uid === editTaskID) || dummyTask} />
    </Box>
}