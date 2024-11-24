import { DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import "react-native-reanimated"
import { TamaguiProvider } from "@tamagui/core"
import { AppToastProvider } from "@/components/AppToastProvider"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { tamaguiConfig } from "@/tamagui.config"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
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
                <AppToastProvider>
                    <Stack>
                        <Stack.Screen
                            name="(tabs)"
                            options={{ headerShown: true }}
                        />
                    </Stack>
                    <StatusBar style="auto" />
                </AppToastProvider>
            </ThemeProvider>
        </TamaguiProvider>
    )
}
