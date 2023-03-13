import React from "react";

function PerPage(props) {
  const handleUpdate = (e) => {
    props.updateLimit(e);
  };

  return (
    <div className="filters__group filter__limit">
      {/* TODO: determine what is already selected and disable clicking on it */}
      <div
        className={
          "filter__single filter__left" +
          (props.currentLimit == 12 ? " used" : "")
        }
        onClick={() => handleUpdate(12)}
      >
        <span>12</span>
      </div>
      <div
        className={
          "filter__single filter__right" +
          (props.currentLimit == 24 ? " used" : "")
        }
        onClick={() => handleUpdate(24)}
      >
        <span>24</span>
      </div>
    </div>
  );
}

export default PerPage;
