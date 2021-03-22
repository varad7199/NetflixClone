import React from "react";
import { FooterContainer } from "../conatiners/foot";
import { FaqContainer } from "../conatiners/faq";
import { JumbotronContainer } from '../conatiners/jumbo';
import { HeaderContainer } from "../conatiners/header";
export default function Home() {
  return (
    <>
      <HeaderContainer/>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}