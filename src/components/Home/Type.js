import React from "react";
import Typewriter from "typewriter-effect";
import { translations } from "../../i18n";

function Type({ language = "en" }) {
  return (
    <Typewriter
      options={{
        strings: translations[language].type.strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
