import { useToastController } from "@tamagui/toast"
import { Button, YStack } from "tamagui"
import { Section } from "components/Section"

export function SectionToast() {
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
