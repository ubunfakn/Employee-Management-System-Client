import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer bg-dark">
        <span>
          © 2023 Copyright:
          <Link className="text-white" target="blank" to={"https://github.com/ubunfakn"}>
            UBUNFAKN
          </Link>
        </span>
    </div>
  );
}
