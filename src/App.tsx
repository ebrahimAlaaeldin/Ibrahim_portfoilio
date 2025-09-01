// ContactForm.tsx
import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<null | { type: 'success' | 'error'; msg: string }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // -------- Option A: Frontend-only demo (no backend) --------
      await new Promise(res => setTimeout(res, 600)); // fake network delay
      setStatus({ type: 'success', msg: 'Message sent successfully!' });

      // -------- Option B: Real send via Formspree --------
      // const form = e.currentTarget;
      // const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { Accept: 'application/json' },
      //   body: new FormData(form),
      // });
      // if (res.ok) {
      //   setStatus({ type: 'success', msg: 'Message sent successfully!' });
      // } else {
      //   setStatus({ type: 'error', msg: 'Failed to send. Please try again.' });
      // }

      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide status after 5s
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start sm:items-center py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-white rounded-lg shadow">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
            autoComplete="email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full p-2 rounded text-white transition ${
            isSubmitting ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        {status && (
          <p
            role="status"
            aria-live="polite"
            className={`mt-4 text-center ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
