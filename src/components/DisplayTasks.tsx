import { EditIcon } from "@chakra-ui/icons";
import { Link, List, ListItem, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { listGroup, listStatus, Tgroup, Tstatus, Ttask } from "../types";

export default function DisplayTasks(props: { taskArray: Ttask[], viewMode: string, setEditTaskID: (id: number) => void }) {
    // Cache
    const { taskArray, viewMode } = props;
    const showThem = viewMode != "Progress Report";
    // Throw-away values
    let makeLinkUID = 0;

    //Functions
    const pickStatus = (selectedValue: Tstatus) => <Select defaultValue={selectedValue}>
        {listStatus.map((status) => <option key={status} value={status}>{status}</option>)}
    </Select>

    const pickGroup = (selectedValue: Tgroup) => <Select defaultValue={selectedValue}>
        {listGroup.map((group) => <option key={group} value={group}>{group}</option>)}
    </Select>

    // FIXME Handle color mode

    return <TableContainer>
        <Table>
            <Thead>
                <Tr backgroundColor='yellow.500'>
                    {showThem && <Th>Edit</Th>}
                    <Th>Description</Th>
                    <Th>LOE</Th>
                    <Th>Status</Th>
                    <Th>Completion Date</Th>
                    <Th>Comments</Th>
                    {/* Hide these in progress report mode */}
                    {showThem && <><Th>Next Steps</Th><Th>Group</Th></>}
                </Tr>
            </Thead>
            <Tbody>
                {taskArray.map(task => ((task: Ttask) => {
                    const { description, loe, status, completionDate, comments, nextSteps, group, links } = task;
                    let rowColor = "";
                    // Skip the switch if we're in progress report mode
                    if (showThem) {
                        switch (group) {
                            case "Support": rowColor = 'gray.100'; break;
                            case "Next": rowColor = 'gray.100'; break;
                            case "Waiting": rowColor = 'gray.300'; break;
                            case "Then": rowColor = 'gray.500'; break;
                            case "Done": rowColor = 'green.500'; break;
                            default: break;
                        }
                    }
                    let statusColor = "";
                    switch (status) {
                        case "On Track": statusColor = 'green.100'; break;
                        case "Risks / Roadblock": statusColor = 'red.100'; break;
                        case "Potential Risks": statusColor = 'yellow.100'; break;
                        default: break;
                    }
                    const uid = task.uid;
                    const editTask = () => {
                        console.log("Edit task " + uid)
                        props.setEditTaskID(uid)
                    };
                    return <Tr key={'row' + uid} backgroundColor={rowColor} whiteSpace={"normal"}>
                        {showThem && <Td><EditIcon onClick={editTask} /></Td>}
                        <Td minHeight={'30em'}>{description}
                            {links && <List>{links.map(link => <ListItem key={'listItem' + makeLinkUID}>
                                <Link key={'link' + makeLinkUID++} href={link.url} isExternal>[{link.text}]</Link>
                            </ListItem>)}
                            </List>}
                        </Td>
                        <Td>{loe}</Td>
                        <Td backgroundColor={statusColor}>{pickStatus(status)}</Td>
                        <Td>{completionDate}</Td>
                        <Td maxW={'md'}>{comments}</Td>

                        {/* Hide these in progress report mode */}
                        {showThem && <>
                            <Td>{nextSteps}</Td>
                            <Td>{pickGroup(group)}</Td>
                        </>}
                    </Tr>;
                })(task))}
            </Tbody>
        </Table>
    </TableContainer>
}