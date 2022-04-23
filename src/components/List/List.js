import React from "react";
import {
  ListContainer,
  ItemText,
  ItemContainer,
  TickIcon,
  ItemTextWrapper,
} from "./ListStyled";

const List = ({ data, selected, selectedData }) => {
  const ListItem = ({ item }) => {
    return (
      <ItemContainer>
        <ItemTextWrapper onClick={(e) => select(e, item)}>
          <ItemText>{item.name}</ItemText>
        </ItemTextWrapper>
      </ItemContainer>
    );
  };
  const ItemSelected = ({ item }) => {
    return (
      <ItemContainer>
        <ItemTextWrapper onClick={(e) => unSelect(e, item)}>
          <ItemText selected bold>
            {item.name}
          </ItemText>
          <TickIcon />
        </ItemTextWrapper>
      </ItemContainer>
    );
  };
  const select = (e, item) => {
    selected((oldArray) => [...oldArray, item]);
  };
  const unSelect = (e, item) => {
    selected((oldArray) => oldArray.filter((i) => i.name !== item.name));
  };

  return (
    <ListContainer>
      {selectedData.map((item, index) => (
        <ItemSelected key={index + "si"} item={item} />
      ))}
      {data?.map((item, index) => {
        if (!selectedData.find((i) => i.name === item.name)) {
          return <ListItem key={index + "li"} item={item} />;
        } else {
          return null;
        }
      })}
    </ListContainer>
  );
};

export default List;
