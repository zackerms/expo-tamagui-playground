import { Section } from "components/Section"
import { XStack, Text } from "tamagui"
import { Link } from "solito/link"

export function SectionNavigation() {
    return (
        <Section title="Navigation">
            <XStack>
                <Link href="/users">
                    <Text>Jump to /users</Text>
                </Link>
            </XStack>
        </Section>
    )
}
