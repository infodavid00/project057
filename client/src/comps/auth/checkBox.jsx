import "./auth.css";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom">
        {checked && <span className="checkbox-tick">✓</span>}
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

export default CustomCheckbox;
