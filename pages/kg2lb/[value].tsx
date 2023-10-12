import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import ToolLayout from "../../components/ToolLayout";

const KgConverter: NextPage = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const { slug } = router.query;
  useEffect(() => {
    if (slug && !isNaN(Number(slug))) {
      setValue(Number(slug));
    }
  }, [slug]);

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
