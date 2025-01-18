import { Button, YStack } from "tamagui"
import { Section } from "components/Section"
import { SectionToast } from "components/SectionToast"
import { SectionDialog } from "components/SectionDialog"
import { SectionPopOver } from "components/SectionPopOver"
import { SectionNavigation } from "components/SectionNavigation"

export default function Page() {
    return (
        <YStack>
            <Section title="Button">
                <Button
                    color="white"
                    backgroundColor="$blue10"
                    onPress={() => alert("Hello!")}
                >
                    Press Me!
                </Button>
            </Section>
            <SectionToast />
            <SectionDialog />
            <SectionPopOver />
            <SectionNavigation />
        </YStack>
    )
}
