import { Link, List, ListItem, Select, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { listGroup, listStatus, taskType, Tgroup, Tstatus } from "./types";

export default function DisplayTasks(props: { taskArray: taskType[] }) {
    // Cache
    const { taskArray } = props;
    // Throw-away values
    let makeLinkUID = 0;

    //Functions
    const pickStatus = (selectedValue: Tstatus) => <Select>
        {listStatus.map((status) => <option key={status} value={status} selected={status === selectedValue}>{status}</option>)}
    </Select>

    const pickGroup = (selectedValue: Tgroup) => <Select>
        {listGroup.map((group) => <option key={group} value={group} selected={group === selectedValue}>{group}</option>)}
    </Select>

    // FIXME Handle color mode

    return <TableContainer>
        <Table>
            <Thead>
                <Tr>
                    <Th>Description</Th>
                    <Th>LOE</Th>
                    <Th>Status</Th>
                    <Th>Completion Date</Th>
                    <Th>Comments</Th>
                    <Th>Next Steps</Th>
                    <Th>Group</Th>
                </Tr>
            </Thead>
            <Tbody>
                {taskArray.map(task => ((task: taskType) => {
                    const { description, loe, status, completionDate, comments, nextSteps, group, links } = task;
                    let rowColor = "";
                    switch (group) {
                        case "Support": rowColor = 'gray.100'; break;
                        case "Next": rowColor = 'gray.100'; break;
                        case "Waiting": rowColor = 'gray.300'; break;
                        case "Then": rowColor = 'gray.500'; break;
                        case "Done": rowColor = 'green.500'; break;
                        default: break;
                    }
                    let statusColor = "";
                    switch (status) {
                        case "On Track": statusColor = 'green.500'; break;
                        case "Risks / Roadblock": statusColor = 'red.500'; break;
                        case "Potential Risks": statusColor = 'yellow.500'; break;
                        default: break;
                    }
                    return <Tr key={'row' + task.uid} backgroundColor={rowColor} whiteSpace={"normal"}>
                        <Td minHeight={'30em'}>{description}
                            {links && <List>{links.map(link => <ListItem>
                                <Link key={'link' + makeLinkUID++} href={link.url} isExternal>[{link.text}]</Link>
                            </ListItem>)}
                            </List>}
                        </Td>
                        <Td>{loe}</Td>
                        <Td backgroundColor={statusColor}>{pickStatus(status)}</Td>
                        <Td>{completionDate}</Td>
                        <Td maxW={'md'}>{comments}</Td>
                        <Td>{nextSteps}</Td>
                        <Td>{pickGroup(group)}</Td>
                    </Tr>;
                })(task))}
            </Tbody>
        </Table>
    </TableContainer>
}