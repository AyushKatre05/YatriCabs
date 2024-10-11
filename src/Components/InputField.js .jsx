import React from 'react';

const InputField = ({ value, onChange, placeholder, icon, onClick }) => (
  <div className="input_container">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onClick={onClick}
    />
    {icon}
  </div>
);

export default InputField;
