import React from "react";

export default function Additional({data, isActive}) {

  return (
    <div className={`${isActive !=='reviews' ? "tab-pane active" : "tab-pane"}`}  id="product-tab-additional">
      <ul className="list-none">
        <li>
        {   data?.data?.description}
        </li>

      </ul>
    </div>
  );
}
