import type { NextPage } from "next";
import { useState } from "react";

import ToolLayout from "../components/ToolLayout";

const KgConverter: NextPage = () => {
  const [value, setValue] = useState<number>();

  return (
    <ToolLayout title="KG to LB">
      <div>
        <input
          onChange={(event) => {
            setValue(Number(event.target.value));
          }}
          type="text"
          value={value}
        />
        {typeof value === "number" && (
          <div>
            {value} KG = {value * 2.205} lbs
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default KgConverter;
