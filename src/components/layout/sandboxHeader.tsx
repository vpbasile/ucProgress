import { Flex, Heading, Link, VStack } from "@chakra-ui/react";

export default function Header() {
    

    // Stuff for toggling the menu
    // const [isOpen, setIsOpen] = useState(false)
    // const toggle = () => setIsOpen(!isOpen)

    // function MenuToggle({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) {
    //     return (<Box display={{ base: "block", md: "none" }} onClick={toggle}>
    //         {isOpen ? <CloseIcon /> : <MenuIcon />}
    //     </Box>);
    // }

    return (<Flex id="header" borderBottom={`2px`} marginBottom={'xl'}>
        <VStack>
            <Heading flex={3} as={'h1'}><Link href="/">UCProgress</Link></Heading>
            {/* <ColorModeButton /> */}
        </VStack>
    </Flex >)
}