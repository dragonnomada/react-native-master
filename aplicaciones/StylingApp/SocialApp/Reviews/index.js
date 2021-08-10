import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

import ReviewItem from "./ReviewItem";

export default function Reviews() {
    return (
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <Text style={{ color: "#555555" }}>Review</Text>
        <SafeAreaView style={{
          paddingVertical: 10
        }}>
          <ScrollView horizontal>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }