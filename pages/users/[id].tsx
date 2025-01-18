import { createParam } from "solito"
import { YStack, Text, Button } from "tamagui"
import { Link } from "solito/link"

const { useParam } = createParam<{ id: string }>()

export default function UserPage() {
    return (
        <YStack>
            <Text>User ID: {useParam("id")}</Text>
            <Link href="/">
                <Button>Back to Home</Button>
            </Link>
        </YStack>
    )
}
