import { useState } from 'react';

const useFormHook = () => {
  const [formData, setFormData] = useState([]);
  const onChange = (name) => (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: e.target.value });
    }
  };
  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return { onChange, handleSubmit };
};

export default useFormHook;
