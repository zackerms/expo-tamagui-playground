import { Button, Popover, Text, YStack } from "tamagui"
import { Section } from "components/Section"

export function SectionPopOver() {
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
                        "quick",
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
