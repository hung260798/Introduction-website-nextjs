import React from "react";

export default function Option({ icon, type, title, price, specs }) {
  return (
    <div className="panel">
      <div className="panel-heading text-center">
        <i className="fa fa-cog fa-2x"></i>
        <h3>{title}</h3>
      </div>
      <div className="panel-body text-center">
        <p className="lead">
          <strong>{price}</strong>
        </p>
      </div>
      <ul className="list-group text-center">
        {specs.map((spec, idx) => (
          <li key={idx} className="list-group-item">
            {spec}
          </li>
        ))}
      </ul>
      <div className="panel-footer text-center">
        <a href="#" className="btn btn-default">
          Order Now!
        </a>
      </div>
    </div>
  );
}
