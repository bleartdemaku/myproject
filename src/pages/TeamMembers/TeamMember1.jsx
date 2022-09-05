import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function TeamMember1() {
  const { id } = useParams();
  const { employees: employee } = useEffect("http://localhost:8000/employees" + id);

  return (
    <div className="flex flex-row">
      <h1>Hello - {id}</h1>
      {employee && (
        <article>
          <h2>{employee.name}</h2>
          <p>{employee.job}</p>
          <h3>{employee.about}</h3>
        </article>
      )}
    </div>
  );
}

export default TeamMember1;
