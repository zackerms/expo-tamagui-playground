import { memo, ReactNode, useMemo } from "react"
import { AlertCircle, Check, Info } from "@tamagui/lucide-icons"
import {
    Toast,
    ToastProvider,
    ToastViewport,
    useToastState,
} from "@tamagui/toast"
import { PortalProvider, XStack, YStack } from "tamagui"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export function AppToastProvider({ children }: { children?: ReactNode }) {
    const { left, top, right } = useSafeAreaInsets()
    return (
        <ToastProvider burntOptions={{ from: "bottom" }}>
            <PortalProvider shouldAddRootHost>
                {children}
                <ToastComponent />
                <ToastViewport
                    portalToRoot={false}
                    zIndex={2}
                    top={top + 16}
                    left={left + 16}
                    right={right + 16}
                />
            </PortalProvider>
        </ToastProvider>
    )
}

export const ToastComponent = memo(function ToastComponent() {
    const currentToast = useToastState()

    const toastColor = useMemo(() => {
        const defaultColor = "$green10"
        switch (currentToast?.preset) {
            case "error":
                return "$red10"
            case "info":
                return "$blue10"
            case "success":
                return defaultColor
            default:
                return defaultColor
        }
    }, [currentToast?.preset])

    if (!currentToast || currentToast.isHandledNatively) return null

    return (
        <Toast
            key={currentToast.id}
            onOpenChange={currentToast.onOpenChange}
            duration={currentToast.duration ?? 3000}
            enterStyle={{
                opacity: 0,
                scale: 0.5,
                y: -20,
            }}
            exitStyle={{ opacity: 0, scale: 1, y: -20 }}
            y={0}
            opacity={1}
            scale={1}
            animation="quicker"
            viewportName={currentToast.viewportName}
            unstyled
            width="100%"
            borderRadius={5}
            backgroundColor={toastColor}
            zIndex={9999}
        >
            <XStack
                gap={16}
                paddingHorizontal={16}
                paddingVertical={8}
                alignItems="center"
                width="100%"
            >
                <ToastIcon preset={currentToast.preset} />
                <YStack flex={1}>
                    <Toast.Title fontWeight="bold" color="white">
                        {currentToast.title}
                    </Toast.Title>
                    {currentToast.message && (
                        <Toast.Description
                            fontSize={13}
                            fontWeight={400}
                            color="white"
                        >
                            {currentToast.message}
                        </Toast.Description>
                    )}
                </YStack>
            </XStack>
        </Toast>
    )
})

const ToastIcon = memo(function ToastIcon({
    preset,
}: {
    preset?: "error" | "done" | "none"
}) {
    const getIcon = () => {
        switch (preset) {
            case "error":
                return AlertCircle
            case "done":
                return Check
            case "none":
                return Info
            default:
                return Info
        }
    }
    const Icon = getIcon()
    return <Icon color="white" size={32} />
})
