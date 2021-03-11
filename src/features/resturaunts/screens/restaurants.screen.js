import React, { useContext } from "react";
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe.area.component";
import { RestaurantInfoCard } from "../components/restaurant-info.card";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingContainer>
          <Loading animating={true} color={Colors.blue300} />
        </LoadingContainer>
      ) : (
        <>
          <SearchContainer>
            <Searchbar />
          </SearchContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return <RestaurantInfoCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
