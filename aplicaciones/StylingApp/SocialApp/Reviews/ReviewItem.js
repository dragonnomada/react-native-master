import React from "react";
import { View, Image } from "react-native";

import Icon from "../components/Icon";

export default function ReviewItem() {
    return (
      <View style={{ position: "relative", padding: 10 }}>
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
              uri: "https://placekitten.com/500",
              width: 100,
              height: 100
            }}
          />
        </View>
        <Icon 
            size={20}
            style={{ 
                position: "absolute", 
                right: 20, 
                bottom: 20, 
                backgroundColor: "deeppink",
                zIndex: 100
            }}
        />
      </View>
    )
  }