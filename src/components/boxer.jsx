import React, { useState } from "react"
import Viewer from "./viewer"
import Presets from "./presets"
import Settings from "./settings";

const Boxer = ({ presets, settings }) => {
  const defaultIdx = 0;
  const [select, setSelect] = useState(presets[defaultIdx].id);
  const [values, setValues] = useState(presets[defaultIdx].values);

  const handleSettingChange = (event) => {
    setValues({ ...values, [event.target.name]: parseFloat(event.target.value) });
    setSelect(null);
  };

  const handlePresetChange = (event) => {
    let selPreset = presets.find(pr => pr.id === event.target.value);
    setSelect(selPreset.id);
    setValues(selPreset.values);
  };

  return (
    <div>
      <Viewer values={values} />
      <Presets selectId={select} params={presets} onChange={handlePresetChange} />
      <Settings params={settings} values={values} onChange={handleSettingChange} />
    </div>
  )

}

export default Boxer