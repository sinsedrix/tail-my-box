import React from "react"

const Presets = ({ params, onChange, selectId }) => {

    return (
        <fieldset className="presets">
            <legend>Presets:</legend>
            {params.map((param, idx) =>
                <div key={param.id}>
                    <input type="radio" name="presets" value={param.id} id={param.id}
                        checked={param.id === selectId} onChange={onChange} />
                    <label htmlFor={param.id}>{param.name}</label>
                </div>
            )}
        </fieldset>
    );
}

export default Presets