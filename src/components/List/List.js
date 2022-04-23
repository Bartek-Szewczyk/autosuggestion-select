import React, { useRef, useState } from "react";
import {
  ListContainer,
  ItemText,
  ItemContainer,
  TickIcon,
  ItemTextWrapper,
} from "./ListStyled";

const List = ({ data, selected, selectedData }) => {
  const itemRef = useRef();
  const [selectedItem, setSelectedItem] = useState([]);
  const ListItem = ({ item }) => {
    return (
      <ItemContainer onClick={(e) => select(e, item)}>
        <ItemTextWrapper>
          <ItemText>{item.name}</ItemText>
        </ItemTextWrapper>
      </ItemContainer>
    );
  };
  const ItemSelected = ({ item }) => {
    return (
      <ItemContainer>
        <ItemTextWrapper>
          <ItemText>{item.name}</ItemText>
          <TickIcon />
        </ItemTextWrapper>
      </ItemContainer>
    );
  };
  const select = (e, item) => {
    setSelectedItem([item]);
    selected((oldArray) => [...oldArray, item]);
    console.log(selectedItem);
  };

  return (
    <ListContainer>
      {selectedData.map((item, index) => (
        <ItemSelected key={index + "si"} item={item} />
      ))}
      {data?.map(
        (item, index) =>
          !selectedItem.includes(item) && <ListItem key={index} item={item} />
      )}
    </ListContainer>
  );
};

export default List;
