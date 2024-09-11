import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { evaluateExpression, reset } from "./Store/EvaluateSlice";

function Evaluator() {
  const exp = useSelector((state) => state.expressionReducer.result);
  console.log(exp);

  const dispatch = useDispatch();
  const [expression, setExpression] = useState("");

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "95vh" }}>
      <div className="w-75 border border-4 border shadow p-5">
        <h3 className="text-center text-primary"> Evaluator</h3>

       

        <div className="my-3 d-flex justify-content-around">
          <input
            className="form-control"
            type="text"
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            placeholder="Enter the expression"
          />
        </div>
        <div className="mt-3 text-center">
        <h4>Result: {exp || "N/A"}</h4>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success me-3"
            onClick={() => dispatch(evaluateExpression(expression))}>
            Evaluate
          </button>
          <button
            className="btn btn-danger me-3"
            onClick={() => {
              dispatch(reset());
              setExpression("");
            }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Evaluator;