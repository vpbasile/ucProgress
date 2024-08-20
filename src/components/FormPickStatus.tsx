import { Select } from "@chakra-ui/react"
import { Tstatus, listStatus } from "../types"

export default function PickStatus(props: { selectedValue: Tstatus }) {
    const { selectedValue } = props
    return <Select defaultValue={selectedValue}>
        {listStatus.map((status) => <option key={status} value={status}>{status}</option>)}
    </Select>
}