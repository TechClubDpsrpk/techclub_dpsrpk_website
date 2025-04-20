'use client';

import { useState } from "react";
import {send_mail} from "@functions/sendMessage"; // Adjust the import path as necessary

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the form from refreshing the page

    const form = event.currentTarget; // Get the form element
    const formData = new FormData(form); // Collect form data

    setStatus("Submitting...");

    // Call the send_mail function and wait for the result
    const result = await send_mail(formData);
    // Handle the result
    if (result.success) {
      setStatus("Message sent successfully!");
      form.reset(); // Reset the form fields
    }
    else {
      setStatus(`Error: ${result.error}`);
    }

    
  };

  return (
    <div className="main"></div>
  )
}
