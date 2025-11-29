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
    Popover,
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
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
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
                onPress={() => setIsPopoverOpen(true)}
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
                <Text>Click here to see the menu</Text>
            </YStack>
            <Popover
                open={isPopoverOpen}
                onOpenChange={(open) => setIsPopoverOpen(open)}
                placement="bottom-end"
                offset={{ mainAxis: 0 }}
            >
                {/* tamagui 1.115 以下だと、Trigger を配置しないと、Navigation Bar上で Popover を表示することができない */}
                <Popover.Trigger>
                    <View />
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
