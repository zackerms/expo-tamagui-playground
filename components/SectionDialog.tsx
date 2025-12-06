import { useState } from "react"
import { Button, Dialog, Input, Text, YStack } from "tamagui"
import { Section } from "components/Section"

export function SectionDialog() {
    const [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
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
                            <Text>This is a dialog with an input field</Text>
                            <Input
                                placeholder="Enter text here..."
                                value={inputValue}
                                onChangeText={setInputValue}
                                borderWidth={1}
                                borderColor="$gray8"
                                padding={12}
                                borderRadius={8}
                            />
                            {inputValue ? (
                                <Text color="$gray11">
                                    You entered: {inputValue}
                                </Text>
                            ) : null}
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
