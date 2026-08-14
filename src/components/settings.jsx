import React from "react"

const Settings = ({ params, values, onChange }) => (
    <fieldset className="settings">
        <legend>Settings:</legend>
        {params.map(param =>
            <div key={param.id}>
                <label htmlFor={param.id}>{param.name} :
                <input type={param.type} min={param.min} max={param.max} step={param.step}
                        name={param.id} id={param.id}
                        value={values[param.id]} onChange={onChange} />
                </label>
            </div>
        )}
    </fieldset>
)

export default Settings