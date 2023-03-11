import React from "react";

const Back = (props: { main: string; sub: string; JLPT: string}) => {
  return (
    <>
      <div className="grid h-64  w-full bg-slate-100 shadow-md">
        <h6 className="absolute text-md p-4 font-black">{props.JLPT}</h6>
        <h1 className="m-auto text-3xl sm:text-3xl font-black p-4">{props.main}</h1>
        <h3 className="m-auto text-md font-black">{props.sub}</h3>
      </div>
    </>
  );
};

const Front = (props: { term: string; JLPT: string }) => {
  return (
    <>
      <div className={"grid h-64  w-full shadow-md " + props.JLPT}>
        <h1 className="m-auto text-6xl font-black">{props.term}</h1>
      </div>
    </>
  );
};

export default { Front, Back };
