import { Button, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, FormLabel, Input } from '@chakra-ui/react';
import { Ttask } from '../types';
import PickGroup from './FormPickGroup';
import PickStatus from './FormPickStatus';

export default function FormEditTask(props: { task: Ttask, clearEditTaskID: () => void }) {
    const { task } = props;
    return 
}