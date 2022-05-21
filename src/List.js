import React from "react";

const List = ({ people }) => {
  return (
    <>
      <h2>List Component</h2>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
