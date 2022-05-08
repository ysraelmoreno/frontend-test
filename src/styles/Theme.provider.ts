import { createStitches, CSS } from "@stitches/react";

import SCP from "./SCP.theme";

const { css, styled, globalCss, config, getCssText, keyframes } =
  createStitches({
    theme: SCP,
    prefix: "byt-",
    media: SCP.media,
  });

export type BYTCSS = CSS;

export { css, styled, globalCss, config, keyframes, getCssText };
