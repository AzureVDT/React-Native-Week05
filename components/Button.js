import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function Button(props) {
    const { onPress, title = "", disabled, style, children } = props;
    return (
        <Pressable style={style} onPress={onPress} disabled={disabled}>
            <Text style={styles.text}>{title}</Text>
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        textAlign: "center",
        transform: [{ translateY: "50%" }],
    },
});
