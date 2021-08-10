
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

import EventItem from "./EventItem";

export default function Events() {
    return (
        <View style={{ backgroundColor: "white", paddingLeft: 10 }}>
            <SafeAreaView>
                <ScrollView horizontal>
                    <EventItem />
                    <EventItem />
                    <EventItem />
                    <EventItem />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}