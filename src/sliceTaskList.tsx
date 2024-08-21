import { createSlice, PayloadAction } from "@reduxjs/toolkit/react";
import { Ttask } from './types';

let makeUID = 0;

const initialState: Ttask[] = [
    // { uid: -1, description: "Blank test", loe: "", status: "Potential Risks", completionDate: "", comments: "Lorem ipsum dolor sit amet.", nextSteps: "", group: "Next" },
    {
        uid: makeUID++, description: "Connected Care Alert", loe: "", status: "On Track", completionDate: "", comments: "", nextSteps: "", group: "Focus", links: [
            { url: "https://ucdh.service-now.com/now/nav/ui/classic/params/target/sc_request.do%3Fsys_id%3Da404593f1b9471d0ac8086e3604bcb76%26sysparm_stack%3D%26sysparm_view%3D", text: "ServiceNow" },
        ]
    },
    {
        uid: makeUID++, description: "Remove Accommodation Code Read Only restrictor for IR", loe: "", status: "On Track", completionDate: "", comments: "", nextSteps: "", group: "Focus", links: [
            { url: "https://ucdh.service-now.com/sc_request.do?sys_id=60c5b6f81bccde14a13e33b4cc4bcb55&sysparm_record_target=task&sysparm_record_row=9&sysparm_record_rows=15&sysparm_record_list=assigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe%5Eactive%3Dtrue%5EstateIN-5%2C1%2C9%2C2%2C-4%2C-3%2C-2%2C-1%2C5%2C10%2C6%2C-6%2C12%2C11%2C-7%2C-8%5EORref_incident.hold_reasonIN1%2C3%2C4%2C5%5Eref_incident.resolved_atISEMPTY%5EORDERBYnumber", text: "ServiceNow" }]
    },
    {
        uid: makeUID++, description: "EVS Discharge Transport Notification", loe: "", status: "N/A", completionDate: "", comments: "Can we secure chat/vocera/page the EVS supervisors when a transporter is sent to pick up a discharge patient?", nextSteps: "", group: "Next", links: [
            { url: "https://ucdh.service-now.com/now/nav/ui/classic/params/target/sc_request.do%3Fsys_id%3D532d0a151b770ed41c9e4223cd4bcb3e%26sysparm_record_target%3Dtask%26sysparm_record_row%3D8%26sysparm_record_rows%3D15%26sysparm_record_list%3Dassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe%255Eactive%253Dtrue%255EstateIN-5%252C1%252C9%252C2%252C-4%252C-3%252C-2%252C-1%252C5%252C10%252C6%252C-6%252C12%252C11%252C-7%252C-8%255EORref_incident.hold_reasonIN1%252C3%252C4%252C5%255Eref_incident.resolved_atISEMPTY%255EORDERBYnumber", text: "ServiceNow" }
        ]
    },
    { uid: makeUID++, description: "Demystify ADT Orders", loe: "", status: "Potential Risks", completionDate: "", comments: "Examine ADT Orders setup.  Tony called out the Cardiac monitoring order, so check that out. Read ADT Orders guides and make a demo for the team.", nextSteps: "", group: "Next" },
    { uid: makeUID++, description: "Project: PACU Transport/Logistics", loe: "", status: "On Track", completionDate: "", comments: "We need to get the stakeholders in a meeting.", nextSteps: "", group: "Waiting" },
    { uid: makeUID++, description: "Logistics tasks grouping/stacking mystery", loe: "", status: "On Track", completionDate: "", comments: "Asked the users if they want to change the settings.", nextSteps: "", group: "Waiting" },
    { uid: makeUID++, description: "Knowledge Management", loe: "", status: "On Track", completionDate: "", comments: "Started collecting topics, signed up for the training", nextSteps: "", group: "Waiting" },
    {
        uid: makeUID++, description: "Other Payer Alerts in response history", loe: "", status: "Risks / Roadblock", completionDate: "", comments: "Alert when 'other payor' information is found in the EB*R segment from Blue Cross.  Having trouble determining why the alert is not consistently appearing.", nextSteps: "", group: "Then", links: [
            { url: "https://ucdh.service-now.com/now/nav/ui/classic/params/target/sc_request.do%3Fsys_id%3D9537337e1b990e18ac8086e3604bcb2e%26sysparm_record_target%3Dtask%26sysparm_record_row%3D5%26sysparm_record_rows%3D15%26sysparm_record_list%3Dassigned_toDYNAMIC90d1921e5f510100a9ad2572f2b477fe%255Eactive%253Dtrue%255EstateIN-5%252C1%252C9%252C2%252C-4%252C-3%252C-2%252C-1%252C5%252C10%252C6%252C-6%252C12%252C11%252C-7%252C-8%255EORref_incident.hold_reasonIN1%252C3%252C4%252C5%255Eref_incident.resolved_atISEMPTY%255EORDERBYnumber", text: "ServiceNow" }
        ]
    },
]

// Define action types
// ---------------------------------------------
// <><> The addTask action will be used to add a new task to the list.
export const addTask = (task: Ttask) => ({
    type: 'ADD_TASK',
    payload: task,
})
// <><> The removeTask action will be used to remove a task from the list.
// <><> Both actions will be used in the reducer function to update the state.


// <><> Using createSLice (which uses Immer) means that we can write code that would mutate the state, but Immer will take care of creating a new state object for us.
// ---------------------------------------------
export const sliceTaskList = createSlice({
    name: 'taskList',
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Ttask>) => {
            console.log("Adding task", action.payload);
            state.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return state.filter(task => task.uid !== action.payload);
        }
    }
})