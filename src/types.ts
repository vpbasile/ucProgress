// Lists for picking status and group

export const listStatus = ["Risks / Roadblock", "Potential Risks", "On Track", "N/A"]
export const listGroup = ["Focus", "Support", "Next", "Waiting", "Then", "Done"]

export type Tstatus = typeof listStatus[number]
export type Tgroup = typeof listGroup[number]

// Type definitions for the task object

export type linkType = {
    url: string;
    text: string;
}

export type Ttask = {
    uid: number;
    description: string;
    loe: string;
    status: Tstatus;
    completionDate: string;
    comments: string;
    nextSteps: string;
    group: Tgroup;
    links?: linkType[];
};