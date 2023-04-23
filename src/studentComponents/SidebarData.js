import React from "react";

export const SidebarData = [
  {
    title: "Grades",
    path: "/A1",

  },
  {
    title: "Modules",
    path: "/Products",

    subNav: [
      {
        title: "M1",
        path: "/Products/M1"
      },
      {
        title: "M2",
        path: "/Products/M2"
      }
    ]
  },
  {
    title: "Assignments",
    path: "/Assignments",

    subNav: [
      {
        title: "Assignment 1",
        path: "/Assignments/Ass1"
      },
      {
        title: "Assignment 2",
        path: "/Assignments/Ass2"
      }
    ]
  },
  

  {
    title: "Chat",
    path: "/Chats"
  }
];
