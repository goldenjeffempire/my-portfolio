import React, { useState, useRef, useEffect } from 'react';
import { cn, validateEmail } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { useToast } from '@/hooks/use-toast';

interface FormField {
  value: string;
  valid: boolean;
  error: string;
  touched: boolean;
  animating: boolean;
}

type FormData = {
  name: FormField;
  email: FormField;
  subject: FormField;
  message: FormField;
};

const AnimatedContactForm: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const formRef = React.useRef<HTMLFormElement>(null);

  const applyShakeAnimation = () => {
    if (formRef.current) {
      formRef.current.classList.add('animate-[shake_0.5s_ease-in-out]');
      setTimeout(() => {
        formRef.current?.classList.remove('animate-[shake_0.5s_ease-in-out]');
      }, 500);
    }
  };

  const { toast } = useToast();
  const [formShake, setFormShake] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const initialFormState: FormData = {
    name: {
      value: '',
      valid: false,
      error: '',
      touched: false,
      animating: false
    },
    email: {
      value: '',
      valid: false,
      error: '',
      touched: false,
      animating: false
    },
    subject: {
      value: '',
      valid: false,
      error: '',
      touched: false,
      animating: false
    },
    message: {
      value: '',
      valid: false,
      error: '',
      touched: false,
      animating: false
    }
  };
  
  const [form, setForm] = useState<FormData>(initialFormState);
  
  // Validate form fields
  const validateField = (name: keyof FormData, value: string): { valid: boolean; error: string } => {
    switch(name) {
      case 'name':
        if (!value.trim()) return { valid: false, error: 'Name is required' };
        if (value.trim().length < 2) return { valid: false, error: 'Name is too short' };
        return { valid: true, error: '' };
        
      case 'email':
        if (!value.trim()) return { valid: false, error: 'Email is required' };
        if (!validateEmail(value)) return { valid: false, error: 'Please enter a valid email' };
        return { valid: true, error: '' };
        
      case 'subject':
        if (!value.trim()) return { valid: false, error: 'Subject is required' };
        if (value.trim().length < 5) return { valid: false, error: 'Subject is too short' };
        return { valid: true, error: '' };
        
      case 'message':
        if (!value.trim()) return { valid: false, error: 'Message is required' };
        if (value.trim().length < 20) return { valid: false, error: 'Message is too short (min. 20 chars)' };
        return { valid: true, error: '' };
        
      default:
        return { valid: true, error: '' };
    }
  };
  
  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    const validation = validateField(fieldName, value);
    
    setForm(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        value,
        valid: validation.valid,
        error: validation.error,
        touched: true
      }
    }));
  };
  
  // Animate form field
  const animateField = (fieldName: keyof FormData) => {
    // Set animation flag
    setForm(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        animating: true
      }
    }));
    
    // Reset animation flag after animation completes
    setTimeout(() => {
      setForm(prev => ({
        ...prev,
        [fieldName]: {
          ...prev[fieldName],
          animating: false
        }
      }));
    }, 800);
  };
  
  // Handle form field blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    const validation = validateField(fieldName, value);
    
    // If field is invalid, animate it
    if (!validation.valid) {
      animateField(fieldName);
    }
    
    setForm(prev => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        valid: validation.valid,
        error: validation.error,
        touched: true
      }
    }));
  };
  
  // Check if all form fields are valid
  const isFormValid = (): boolean => {
    return Object.keys(form).every(key => form[key as keyof FormData].valid);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show errors
    const touchedForm = Object.keys(form).reduce((acc, key) => {
      const fieldName = key as keyof FormData;
      return {
        ...acc,
        [fieldName]: {
          ...form[fieldName],
          touched: true,
          error: validateField(fieldName, form[fieldName].value).error,
          valid: validateField(fieldName, form[fieldName].value).valid
        }
      };
    }, {} as FormData);
    
    setForm(touchedForm);
    
    // If form is not valid, shake the form and animate invalid fields
    if (!isFormValid()) {
      setFormShake(true);
      
      // Animate invalid fields
      Object.keys(touchedForm).forEach(key => {
        const fieldName = key as keyof FormData;
        if (!touchedForm[fieldName].valid) {
          animateField(fieldName);
        }
      });
      
      setTimeout(() => setFormShake(false), 500);
      return;
    }
    
    // Form is valid, proceed with submission
    setSubmitting(true);
    
    try {
      // Prepare data for submission
      const formData = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
      };
      
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success scenario
      setSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setForm(initialFormState);
        setSuccess(false);
      }, 5000);
      
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon.",
        variant: "default"
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  // Use ref from intersection observer
  useEffect(() => {
    if (formRef.current) {
      // @ts-ignore - we know this works even if TypeScript complains
      ref.current = formRef.current;
    }
  }, [ref]);
  
  return (
    <div 
      ref={formRef}
      className={cn(
        "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 lg:p-8 border border-gray-100 dark:border-gray-700 transition-all duration-500",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        formShake ? "animate-shake" : ""
      )}
    >
      <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200">Send Me a Message</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                name="name"
                value={form.name.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-200",
                  form.name.touched && !form.name.valid ? "border-red-500 dark:border-red-500" : "",
                  form.name.animating ? "animate-wiggle" : ""
                )}
                placeholder="John Doe"
              />
              {form.name.touched && form.name.error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fadeIn">{form.name.error}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                name="email"
                value={form.email.value}
                onChange={handleChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-200",
                  form.email.touched && !form.email.valid ? "border-red-500 dark:border-red-500" : "",
                  form.email.animating ? "animate-wiggle" : ""
                )}
                placeholder="johndoe@example.com"
              />
              {form.email.touched && form.email.error && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fadeIn">{form.email.error}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <div className="relative">
            <input 
              type="text" 
              id="subject" 
              name="subject"
              value={form.subject.value}
              onChange={handleChange}
              onBlur={handleBlur}
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-200",
                form.subject.touched && !form.subject.valid ? "border-red-500 dark:border-red-500" : "",
                form.subject.animating ? "animate-wiggle" : ""
              )}
              placeholder="Project Inquiry"
            />
            {form.subject.touched && form.subject.error && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fadeIn">{form.subject.error}</p>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Message
          </label>
          <div className="relative">
            <textarea 
              id="message" 
              name="message"
              value={form.message.value}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 transition-colors duration-200",
                form.message.touched && !form.message.valid ? "border-red-500 dark:border-red-500" : "",
                form.message.animating ? "animate-wiggle" : ""
              )}
              placeholder="I'd like to discuss a potential project..."
            ></textarea>
            {form.message.touched && form.message.error && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400 animate-fadeIn">{form.message.error}</p>
            )}
          </div>
        </div>
        
        <div>
          <button 
            type="submit" 
            className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
            disabled={submitting}
          >
            {!submitting ? (
              <span>Send Message</span>
            ) : (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            )}
          </button>
          
          {success && (
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg transition-all duration-300 animate-fadeIn">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Your message has been sent successfully. I'll get back to you soon!
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AnimatedContactForm;