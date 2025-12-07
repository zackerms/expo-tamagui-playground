import { Alert } from "react-native"
import { Button, ScrollView } from "tamagui"
import { Section } from "components/Section"
import { SectionToast } from "components/SectionToast"
import { SectionDialog } from "components/SectionDialog"
import { SectionPopOver } from "components/SectionPopOver"

export default function HomeScreen() {
    return (
        <ScrollView paddingVertical={32} flex={1}>
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
