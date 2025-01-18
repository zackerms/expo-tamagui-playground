import { useState } from "react"
import { Button, Dialog, Text, YStack } from "tamagui"
import { Section } from "components/Section"

export function SectionDialog() {
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
