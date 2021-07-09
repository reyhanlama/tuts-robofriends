import React from "react"
import Card from "./Card"
const CardList = ({ robots }) => {
  //   const { id, name, email } = robots
  return (
    <div>
      {robots.map((robot, i) => {
        return (
          <>
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          </>
        )
      })}
    </div>
  )
}

export default CardList
