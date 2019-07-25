import tw from "tailwind.macro";
import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs";

const Content = styled(ParallaxLayer)`
  ${tw`p-6 xs:p-8 sm:p-16 md:p-24 lg:p-32 justify-center items-center flex z-50`};
`;

export default Content;
