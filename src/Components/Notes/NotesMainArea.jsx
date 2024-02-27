//import React from 'react'

import NotesCards from "./NotesCards";

const NotesMainArea = () => {
  return (
    <div className=" ">
      <div className=" flex items-center justify-center pb-16">
        <h1 className="uppercase text-2xl font-bold">My Notes</h1>
      </div>
      <NotesCards/>
    </div>
  );
};

export default NotesMainArea;
