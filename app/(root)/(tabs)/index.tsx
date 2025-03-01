import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className={"font-bold my-10 font-rubik text-3xl"}>Welcome to ReState</Text>
            <Link href="/sign-in">Sign up</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/properties/1">Properties</Link>
            <Link href="/profile">Profile</Link>
        </View>
    );
}