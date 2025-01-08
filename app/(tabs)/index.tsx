import { useToastController } from "@tamagui/toast"
import { ReactNode, useState } from "react"
import { Alert } from "react-native"
import { Text, YStack, Button, ScrollView, Dialog, Popover } from "tamagui"

export default function HomeScreen() {
    return (
        <ScrollView paddingVertical={32} flex={1}>
            <Text fontSize={32} fontWeight="bold" w="100%" textAlign="center">
                Expo 🤝 Tamagui
            </Text>
            <Section title="Button">
                <Button
                    color="white"
                    backgroundColor="$blue10"
                    onPress={() => Alert.alert("Hello!")}
                >
                    Press Me!
                </Button>
            </Section>
            <SectionToast />
            <SectionDialog />
            <SectionPopOver />
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

function SectionToast() {
    const toast = useToastController()
    return (
        <Section title="Toast">
            <YStack gap={8}>
                <Button
                    color="white"
                    backgroundColor="$blue10"
                    onPress={() =>
                        toast.show("Info Toast", {
                            preset: "info",
                            duration: 3000,
                        })
                    }
                >
                    Info
                </Button>
                <Button
                    color="white"
                    backgroundColor="$green10"
                    onPress={() =>
                        toast.show("Success Toast", {
                            preset: "success",
                            duration: 3000,
                        })
                    }
                >
                    Success
                </Button>
                <Button
                    color="white"
                    backgroundColor="$red10"
                    onPress={() =>
                        toast.show("Error Toast", {
                            preset: "error",
                            duration: 3000,
                        })
                    }
                >
                    Error
                </Button>
            </YStack>
        </Section>
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

function SectionPopOver() {
    return (
        <Section title="PopOver">
            <Popover placement="top-end" offset={{ mainAxis: 16 }}>
                <Popover.Trigger asChild>
                    <Button color="white" backgroundColor="$blue10">
                        Show Popover
                    </Button>
                </Popover.Trigger>

                <Popover.Content
                    backgroundColor="white"
                    shadowColor="#96a3b31a"
                    shadowOffset={{ width: 0, height: 8 }}
                    shadowRadius={28}
                    borderRadius={16}
                    padding={0}
                    enterStyle={{ y: 10, opacity: 0 }}
                    exitStyle={{ y: 10, opacity: 0 }}
                    animation={[
                        "quickest",
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                >
                    <YStack gap={8} padding={16}>
                        <Text fontSize={16} fontWeight="bold">
                            Popover
                        </Text>
                        <Text fontSize={14}>
                            This is a popover. It can be placed in any
                            direction.
                        </Text>
                    </YStack>
                </Popover.Content>
            </Popover>
        </Section>
    )
}
