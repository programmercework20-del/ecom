import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCancelIndex, setActiveCancelIndex] = useState(null);

  // General FAQs
  const generalFaqs = [
    {
      question: "IS CASH ON DELIVERY (COD) AVAILABLE?",
      answer: "Yes, Cash on Delivery is available for most pin codes across India.",
    },
    {
      question: "HOW TO PLACE A RETURN / EXCHANGE REQUEST?",
      answer: "You can raise a return or exchange request through our website under 'My Orders'.",
    },
    {
      question: "ARE THERE ANY ADDITIONAL CHARGES FOR RETURNS/EXCHANGE?",
      answer: "No, there are no extra charges for returns or exchanges.",
    },
    {
      question: "HOW LONG WILL MY ORDER TAKE TO ARRIVE?",
      answer: "Orders usually take 5-7 business days depending on your location.",
    },
    {
      question: "WHAT HAPPENS IF MY SHIPMENT DOES NOT GET DELIVERED ON TIME?",
      answer: "If your shipment is delayed, please contact our support team for assistance.",
    },
    {
      question: "ARE THERE ANY SHIPPING CHARGES ON DELIVERY?",
      answer: "We provide free shipping on all prepaid and COD orders.",
    },
    {
      question: "DO WE SHIP OUTSIDE INDIA?",
      answer: "Currently, we ship only within India.",
    },
  ];

  // Cancellation, Return & Refund FAQs (from image)
  const cancelFaqs = [
    {
      question: "HOW CAN I CANCEL AN ORDER?",
      answer:
        "Once an order is placed, it’s immediately processed to ensure fast delivery — so we’re unable to offer cancellations at this time. We appreciate your understanding and support!",
    },
    {
      question: "WHAT HAPPENS TO ORDERS WHERE PRODUCTS ARE RECEIVED IN DAMAGED CONDITION?",
      answer:
        "If you receive a product in damaged condition, please contact our support team immediately for a replacement or refund.",
    },
    {
      question: "WHAT SHOULD I DO IF I RECEIVE A DIFFERENT ITEM FROM THE ONE THAT I HAVE ORDERED?",
      answer:
        "In case you receive a different item, kindly reach out to our support team and we will arrange for the correct product to be sent.",
    },
    {
      question: "I HAVE REQUESTED A REPLACEMENT, WHEN WILL I GET IT?",
      answer:
        "Replacements are usually processed and delivered within 5-7 business days after approval.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleCancelFAQ = (index) => {
    setActiveCancelIndex(activeCancelIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-1 py-10 mt-20">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-center italic mb-8">
        Frequently Asked Question's
      </h1>

      {/* General Section */}
      <h2 className="text-lg font-medium mb-5">General Queries</h2>
      <div className="space-y-2">
        {generalFaqs.map((faq, index) => (
          <div key={index} className="border rounded bg-gray-100">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Cancellation Section */}
      <h2 className="text-lg font-medium mb-5 mt-10">
        Cancellation, Return / Exchange & Refund
      </h2>
      <div className="space-y-2">
        {cancelFaqs.map((faq, index) => (
          <div key={index} className="border rounded bg-gray-100">
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
              onClick={() => toggleCancelFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {activeCancelIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeCancelIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
