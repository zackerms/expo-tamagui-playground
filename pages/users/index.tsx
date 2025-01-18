import { YStack, Text } from "tamagui"
import { Link } from "solito/link"

export default function UsersPage() {
    return (
        <YStack>
            <Link href="/users/alice">
                <Text>Alice</Text>
            </Link>
            <Link href="/users/bob">
                <Text>Bob</Text>
            </Link>
        </YStack>
    )
}
