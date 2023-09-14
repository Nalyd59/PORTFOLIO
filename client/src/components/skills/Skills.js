import * as React from "react";

function ProgressBar({ label, value, color, name }) {
    return (
        <div className={`progress`} role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{backgroundColor: '#3a3a3c', margin: '10px'}}>
            <div className={`progress-bar progress-bar-striped bg-${color}`} style={{ width: `${value}%`}}>{name}</div>
        </div>
    );
}

const Skills = () => {
  return (
    <>
    <div style={{width: '80%', margin: '10px auto'}}>
      <ProgressBar label="Default striped example" value={10} color="primary" name="HTML"/>
      <ProgressBar label="Success striped example" value={25} color="success" name="HTML"/>
      <ProgressBar label="Info striped example" value={50} color="info" name="HTML"/>
      <ProgressBar label="Warning striped example" value={75} color="warning" name="HTML"/>
      <ProgressBar label="Danger striped example" value={100} color="danger" name="HTML"/>
    </div>
    </>
  );
};

export default Skills;
