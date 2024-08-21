import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
import PickGroup from './features/tasks/FormPickGroup';
import PickStatus from './features/tasks/FormPickStatus';
import { Ttask } from './types';
export default function DisplayFormEdit(props: { isEditing: boolean, clearEditTaskID: () => void, task: Ttask }) {
    const { isEditing, clearEditTaskID, task } = props;
    return <Drawer isOpen={isEditing} placement='left' onClose={clearEditTaskID} size={'xl'}>
        <DrawerOverlay />
        <DrawerContent>
            {/* <DrawerCloseButton /> */}
            <DrawerHeader>
                <Heading as={'h2'}>Edit</Heading>
                <Button colorScheme='red' onClick={clearEditTaskID}>Cancel</Button>
            </DrawerHeader>

            <DrawerBody>
                <FormLabel htmlFor='editDescription'>Description</FormLabel>
                <Input id='editDescription' defaultValue={task.description} />
                <FormLabel htmlFor='editLOE'>LOE</FormLabel>
                <Input id='editLOE' defaultValue={task.loe} />
                <FormLabel>Status</FormLabel>
                <PickStatus selectedValue={task.status} />
                <FormLabel htmlFor='editCompletionDate'>Completion Date</FormLabel>
                <Input id='editCompletionDate' defaultValue={task.completionDate} />
                <FormLabel htmlFor='editComments'>Comments</FormLabel>
                <Textarea id='editComments' defaultValue={task.comments} />
                <FormLabel htmlFor='editNextSteps'>Next Steps</FormLabel>
                <Textarea id='editNextSteps' defaultValue={task.nextSteps} />
                <FormLabel htmlFor='editGroup'>Group</FormLabel>
                <PickGroup selectedValue={task.group} />
            </DrawerBody>

            <DrawerFooter>
                <Button colorScheme='green' onClick={clearEditTaskID}>Save & Close</Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
}