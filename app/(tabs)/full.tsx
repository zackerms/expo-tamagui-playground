import { useToastController } from "@tamagui/toast"
import { ReactNode, useState } from "react"
import {
    Text,
    YStack,
    Button,
    Image,
    View,
    ScrollView,
    Dialog,
    Portal,
} from "tamagui"

export default function HomeScreen() {
    return (
        <ScrollView flex={1}>
            <SectionDialog />
        </ScrollView>
    )
}

function Section({ title, children }: { title: string; children?: ReactNode }) {
    return (
        <YStack padding={16} gap={16}>
            <Text fontSize={20} fontWeight="bold">
                {title}
            </Text>
            {children}
        </YStack>
    )
}

function SectionDialog() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Section title="Dialog">
            <Button
                color="white"
                backgroundColor="$blue10"
                onPress={() => setIsOpen(true)}
            >
                Open Dialog
            </Button>
            <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay key="overlay" />
                    <Dialog.Content key="content" backgroundColor="white">
                        <YStack padding={16} gap={16}>
                            <Text fontSize={20} fontWeight="bold">
                                Dialog
                            </Text>
                            <Text>This is a dialog</Text>
                            <Button
                                color="white"
                                backgroundColor="$blue10"
                                onPress={() => setIsOpen(false)}
                            >
                                Close
                            </Button>
                        </YStack>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </Section>
    )
}
