import { ReactNode } from "react"
import { Text, YStack } from "tamagui"

export function Section({
    title,
    children,
}: {
    title: string
    children?: ReactNode
}) {
    return (
        <YStack padding={16} gap={16}>
            <Text fontSize={20} fontWeight="bold">
                {title}
            </Text>
            {children}
        </YStack>
    )
}
