import { Select } from "@chakra-ui/react";
import { Tgroup, listGroup } from "../types";

export default function PickGroup(props: { selectedValue: Tgroup }) {
    const { selectedValue } = props;
    return <Select defaultValue={selectedValue}>
        {listGroup.map((group) => <option key={group} value={group}>{group}</option>)}
    </Select>
}