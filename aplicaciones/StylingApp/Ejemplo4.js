import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing, View, Text, Image, ScrollView, SafeAreaView, StyleSheet, StatusBar } from "react-native";

// Mockup Component - Componente Falso / Ficticio / Cascarón
function Icon({ size, style }) {
  return (
    <View style={{
      width: size || 18,
      height: size || 18,
      borderRadius: 15,
      backgroundColor: "#8D5BEF",
      ...style
    }}></View>
  );
}

// Programador Diseñador
function HeaderApp() {
  return (
    <View style={{
      display: "flex",
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      backgroundColor: "white",
      padding: 10,
      elevation: 2,
      shadowOpacity: 0.1
    }}>
      <Text style={{ fontWeight: "bold" }}>Pleasure</Text>
      <Icon />
    </View>
  )
}

function ReviewItem() {
  return (
    <View style={{ padding: 10 }}>
      <View style={{
        borderRadius: 10,
        shadowColor: "purple",
        shadowRadius: 20,
        shadowOpacity: 0.5,
        elevation: 10,
        shadowOffset: {
          width: 20,
          height: 20
        },
        overflow: "hidden"
      }}>
        <Image
          source={{
            uri: "https://placekitten.com/400",
            width: 100,
            height: 100
          }}
        />
      </View>
      <Icon style={{ position: "absolute", right: 20, bottom: 20, backgroundColor: "deeppink" }} />
    </View>
  )
}

function Reviews() {
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

function EventTitle() {
  return (
    <View style={{ paddingBottom: 10 }}>
      <Text style={{ fontSize: 10, color: "cornflowerblue" }}>Selected</Text>
      <Text style={{ fontWeight: "bold" }}>People like me</Text>
      <Text style={{ fontSize: 8, color: "#777777" }}>Someone who wants me to be a mediocre</Text>
    </View>
  )
}

function EventBadge() {
  return (
    <View
      style={{
        position: "absolute",
        left: 10,
        bottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#C660A8"
      }}
    >
      <Text style={{ color: "white", fontSize: 10 }}>Oct 01 2021</Text>
    </View>
  );
}

function EventImage() {
  return (
    <View>
      <Image style={{ borderRadius: 10 }} source={{ uri: "https://placekitten.com/400", width: 250, height: 150 }} />
      <EventBadge />
    </View>
  );
}

function EventItem() {
  return (
    <View style={{ padding: 5 }}>
      <EventTitle />
      <EventImage />
    </View>
  )
}

function Events() {
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

function ToolbarIcon() {
  return (
    <View>
      <Icon size={30} />
      <Text>News</Text>
    </View>
  );
}

function Toolbar() {
  return (
    <View
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        flexDirection: "row",
        bottom: 0,
        backgroundColor: "white",
        padding: 5,
        zIndex: 10
      }}
    >
      <ToolbarIcon />
      <ToolbarIcon />
      <ToolbarIcon />
      <ToolbarIcon />
      <ToolbarIcon />
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <HeaderApp />
      <Reviews />
      <Events />
      <Toolbar />
    </View>
  );
}