import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import OptionIcon from "./OptionIcon";

export default function TripleSelector({ label, onSelectOption }) {
    const [selectedOption, setSelectedOption] = useState(0);

    useEffect(() => {
        if (typeof onSelectOption === "function") {
            onSelectOption(selectedOption);
        }
    }, [selectedOption]);

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderBottomColor: "gainsboro"
            }}
        >
            <View
                style={{
                    paddingHorizontal: 12,
                    width: 80,
                    // backgroundColor: "red"
                }}
            >
                <Text style={{ color: "#555555" }}>{label || "Unknown"}</Text>
            </View>
            <View
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "blue"
                }}
            >
                <OptionIcon 
                    label="Ch"
                    size={1} 
                    selected={selectedOption === 1} 
                    onSelect={() => setSelectedOption(1)} 
                />
                <OptionIcon 
                    label="M"
                    size={2}
                    selected={selectedOption === 2}
                    onSelect={() => setSelectedOption(2)}
                />
                <OptionIcon 
                    label="G"
                    size={3}
                    selected={selectedOption === 3}
                    onSelect={() => setSelectedOption(3)}
                />
            </View>
        </View>
    );
}