import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import React, { useEffect, useState } from "react"
import "react-native-reanimated"
import { TamaguiProvider } from "@tamagui/core"
import { AppToastProvider } from "components/AppToastProvider"
import { tamaguiConfig } from "tamagui.config"
import {
    Button,
    Dialog,
    Text,
    useWindowDimensions,
    View,
    YStack,
} from "tamagui"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const { top, right, left, bottom } = useSafeAreaInsets()

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
            <ThemeProvider value={DefaultTheme}>
                <AppToastProvider
                    safeAreaInsets={{
                        top,
                        right,
                        left,
                        bottom,
                    }}
                >
                    <Stack
                        screenOptions={{
                            header: () => <Header safeAreaTop={top} />,
                        }}
                    >
                        <Stack.Screen name="(tabs)" />
                    </Stack>
                    <StatusBar style="auto" />
                </AppToastProvider>
            </ThemeProvider>
        </TamaguiProvider>
    )
}

const Header = ({ safeAreaTop }: { safeAreaTop: number }) => {
    const { height, width } = useWindowDimensions()
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <View
            width="100%"
            paddingTop={safeAreaTop + 32}
            paddingBottom={32}
            backgroundColor="white"
        >
            <YStack
                alignItems="center"
                onPress={() => setIsDialogOpen(true)}
                tag="button"
            >
                <Text
                    fontSize={32}
                    fontWeight="bold"
                    width="100%"
                    textAlign="center"
                >
                    Expo 🤝 Tamagui
                </Text>
                <Text>Click here to see the author</Text>
            </YStack>
            <Dialog
                modal={true}
                open={isDialogOpen}
                onOpenChange={setIsDialogOpen}
            >
                <Dialog.Portal width={width} height={height}>
                    <Dialog.Overlay
                        key="overlay"
                        onPress={() => setIsDialogOpen(false)}
                    />
                    <Dialog.Content key="content" backgroundColor="white">
                        <YStack padding={16} gap={16}>
                            <Text fontSize={20} fontWeight="bold">
                                Author 🎉
                            </Text>
                            <Text>@zackerms</Text>
                            <Button
                                color="white"
                                backgroundColor="$blue10"
                                onPress={() => setIsDialogOpen(false)}
                            >
                                Close
                            </Button>
                        </YStack>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </View>
    )
}
