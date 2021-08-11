import React from "react";

import { View } from "react-native";

import FrutaListItem from "./FrutaListItem";
    
export default function FrutasList () {
    return (
        <View style={{
            display: "flex",
            flexDirection: "row"
        }}>
            <FrutaListItem />
            <FrutaListItem />
            <FrutaListItem />
            <FrutaListItem />
            <FrutaListItem />
            <FrutaListItem />
            <FrutaListItem />
        </View>
    );
};