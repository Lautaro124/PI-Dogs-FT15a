import React from "react";

export default function Paginate(props) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(props.dogis?.length / props.breads); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      {pageNumber &&
        pageNumber.map((e) => (
          <button
            key= {e}
            onClick={() => {
              props.paginate(e)
            }}>
            {e}
          </button>
        ))}
    </div>
  );
}
