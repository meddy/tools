import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ToolLayout from "../../components/ToolLayout";

const KgConverter: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const urlValue = Number(router.query.value);
    if (!isNaN(urlValue)) {
      setValue(urlValue);
    }
  }, [router.query.value]);

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
        <div>
          {value} KG = {value * 2.205} lbs
        </div>
      </div>
    </ToolLayout>
  );
};

export default KgConverter;
