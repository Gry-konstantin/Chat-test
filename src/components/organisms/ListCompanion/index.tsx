import React from "react";
import { Companion } from "../../molecules/Сompanion";
import "./styles.scss";

interface IListItem {
  companionArray?: {
    id: number;
    name: string;
    lastMessage: string;
    male?: boolean;
  }[];
}

export const ListCompanion: React.FC<IListItem> = ({ companionArray }) => {
  return (
    <div className="list">
      {companionArray ? (
        companionArray.map((item) => (
          <Companion
            key={item.id}
            name={item.name}
            lastMessage={item.lastMessage}
            male={item.male}
          />
        ))
      ) : (
        <div className="alone">
          <div className="alone__image" />
          <div className="alone__text">There is no other users yet</div>
        </div>
      )}
    </div>
  );
};
