import { useToastController } from "@tamagui/toast"
import { ReactNode } from "react"
import {Text, YStack, Button, Image, View} from "tamagui"

export default function HomeScreen() {
    return (
        <View
            flex={1}
            backgroundColor="black"
        >
            <Image
                src="https://picsum.photos/1000"
                w="100%"
                h="100%"
                resizeMode="cover"
            />
        </View>
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
