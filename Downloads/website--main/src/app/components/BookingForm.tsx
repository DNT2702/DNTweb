import { useState } from 'react';

export default function BookingForm({ dark = true, onSuccess }: { dark?: boolean; onSuccess?: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '', problem: '' });
  const [error, setError] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Only numbers
    if (value.length <= 10) {
      setForm({ ...form, phone: value });
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    alert('Thank you! We will contact you shortly.');
    setForm({ name: '', phone: '', problem: '' });
    if (onSuccess) onSuccess();
  };

  const labelClass = dark ? "block text-white/70 text-sm font-medium mb-1" : "block text-[#1A1A2E]/70 text-sm font-medium mb-1";
  const inputClass = dark 
    ? "w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/40"
    : "w-full px-4 py-3 rounded-xl bg-[#F0F4FA] border border-[#1B3A6B]/15 text-[#1A1A2E] placeholder:text-[#1A1A2E]/40 text-sm focus:outline-none focus:border-[#1B3A6B]/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Full Name</label>
        <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
          className={inputClass}
          placeholder="Enter your name" />
      </div>
      <div>
        <label className={labelClass}>Phone Number</label>
        <input type="tel" required value={form.phone} onChange={handlePhoneChange}
          className={`${inputClass} ${error ? 'border-red-500 bg-red-500/5' : ''}`}
          placeholder="10-digit mobile number" />
        {error && <p className="text-red-400 text-[10px] mt-1 font-bold">{error}</p>}
      </div>
      <div>
        <label className={labelClass}>Health Concern</label>
        <select required value={form.problem} onChange={e => setForm({ ...form, problem: e.target.value })}
          className={`${inputClass} ${dark ? '[&>option]:text-[#1A1A2E]' : ''}`}>
          <option value="">Select your concern</option>
          <option value="respiratory">Respiratory Diseases</option>
          <option value="migraine">Headache & Migraine</option>
          <option value="endocrine">Endocrine Disorders</option>
          <option value="pediatric">Pediatric Care</option>
          <option value="dermatology">Dermatology & Hair</option>
          <option value="cardiovascular">Cardiovascular</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit"
        className="w-full bg-[#C62828] text-white py-4 rounded-xl hover:bg-[#E53935] transition-all text-base font-bold shadow-lg hover:shadow-xl mt-2">
        Book Now →
      </button>
    </form>
  );
}
