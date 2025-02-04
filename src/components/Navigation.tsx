import { h } from "preact";
import { useState } from "preact/hooks";
import Certificates from "./Certificates";
import Projects from "./Projects";
import certificates from "../data/certificates";

const Navigation = () => {
  const [selected, setSelected] = useState(true);

  return (
      <div class="md:w-8/12">
          <div class="w-full hidden md:inline">
              <div class="text-start">
                  <button class={`px-4 py-2 transition ${selected === true ? "bg-gray-300 text-black font-medium" : "bg-[#245bb1] text-white"}`}
                      onClick={() => setSelected(true)}>
                      Proyectos</button>

                  <button class={`px-4 py-2 transition ${selected === false ? "bg-gray-300 text-black font-medium" : "bg-[#245bb1] text-white"}`}
                      onClick={() => setSelected(false)}>
                      Certificados
                  </button>
              </div>
              {selected === true ?<Projects />:<Certificates certificates={certificates}/>}
          </div>
          <div class="inline md:hidden">
              <Projects/>
          </div>
      </div>
  );
};

export default Navigation;
