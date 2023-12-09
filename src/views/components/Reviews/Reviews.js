import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css";

const Reviews = () => {
  const dataSource = [
    {
      type: "Employees",
      collapsed: false,
      people: [
        {
          name: "Tanzid",
          age: 25,
          sex: "male",
          role: "Developer",
          collapsed: false,
        },
        {
          name: "Eftiar",
          age: 24,
          sex: "Male",
          role: "Developer",
          collapsed: false,
        },
      ],
    },
  ];
  return (
    <div className="MainDiv">
      <div className="container">
        {dataSource.map((node, i) => {
          const type = node.type;
          const lable = <span className="node">{type}</span>;
          return (
            <TreeView
              key={type + "|" + i}
              nodeLabel={lable}
              defaultCollapsed={true}
            >
              {node.people.map((person) => {
                const label2 = <span className="node">{person.name}</span>;
                return (
                  <TreeView
                    nodeLabel={label2}
                    key={person.name}
                    defaultCollapsed={true}
                  >
                    <div className="info">age: {person.age}</div>
                    <div className="info">gender: {person.sex}</div>
                    <div className="info">role: {person.role}</div>
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
