import React from "react";
import { css } from "@emotion/react";
import { BounceLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => (
  <div className="flex justify-center items-center">
    <BounceLoader color="#123abc" loading={true} css={override} size={60} />
  </div>
);

export default Loading;
