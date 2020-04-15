import CMS from "netlify-cms-app";
import withStyled from "./with-styled";

import MainTemplate from "../templates/MainTemplate";

CMS.registerPreviewTemplate("main", withStyled(MainTemplate));
