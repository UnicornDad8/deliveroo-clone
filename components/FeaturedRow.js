import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components/native";

export default function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View>
        <FeaturedHeader>
          <Title>{title}</Title>
          <ArrowRightIcon size={22} color="#00CCBB" />
        </FeaturedHeader>
        <Description>{description}</Description>
      </View>
      <FeaturedCardContainer
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id="01"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-2.jpeg?raw=true"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanes"
          address="123 main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="01"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-2.jpeg?raw=true"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanes"
          address="123 main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="01"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-2.jpeg?raw=true"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanes"
          address="123 main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="01"
          imgUrl="https://github.com/Ceci007/image-repository/blob/master/img/course-2.jpeg?raw=true"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanes"
          address="123 main street"
          short_description="This is a short description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </FeaturedCardContainer>
    </View>
  );
}

const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

const FeaturedHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: gray;
  padding: 0 20px;
  margin-top: -15px;
`;

const FeaturedCardContainer = styled.ScrollView`
  padding: 5px;
`;
