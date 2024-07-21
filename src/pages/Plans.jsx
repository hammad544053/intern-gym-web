import React, { useState, useRef } from 'react';
import { Check } from 'lucide-react';

const PricingCards = () => {
  const feature1 = 'Diet Plan';
  const feature2 = 'Workout';
  const feature3 = 'Self Instructor';
  const feature4 = 'Neutritions';
  const feature5 = 'Body Building';
  const feature6 = 'Special Training';

  const cardData = [
    {
      title: 'Basic Packages',
      price: '$60',
      features: [feature1, feature2, feature3, feature4, feature5, feature6],
    },
    {
      title: 'Advance Packages',
      price: '$80',
      features: [feature1, feature2, feature3, feature4, feature5, feature6],
    },
    {
      title: 'Premium Packages',
      price: '$120',
      features: [feature1, feature2, feature3, feature4, feature5, feature6],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null); // Reference to the form

  const handleButtonClick = (index) => {
    setSelectedPlan((prevIndex) => (prevIndex === index ? null : index));
    setSubmitted(false); // Reset the submission status
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    setScreenshot(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Number:', e.target.number.value);
    console.log('Screenshot:', screenshot);

    // Show the confirmation message
    setSubmitted(true);

    // Reset the form after submission (clear input fields)
    formRef.current.reset();

    // Hide the confirmation message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    // Reset screenshot state
    setScreenshot(null);
  };

  return (
    <div className="w-full text-white py-[2rem] px-4">
      <h1 className="font-bold text-4xl py-2 text-center">Select Our Packages</h1>
      <p className='text-center py-2'>Choose excellence. Our packages offer a blend value, performance, and customization for your success.</p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={` border-gray-50 border-2 h-[472px] md:h-[500px] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <h2 className="text-2xl font-bold text-center py-8">{card.title}</h2>
            <p className="text-center text-4xl font-bold">{card.price} <sup>/Month</sup></p>
            <div className="text-center font-medium">
              {card.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className={`flex items-center justify-center py-2 border-b mx-8 ${featureIndex === 0 ? 'mt-4' : ''}`}
                >
                  {(index === 0 && featureIndex < 2) || (index === 1 && featureIndex < 4) || (index === 2) ? (
                    <Check color="#00ff11" className=" mr-2 " />
                  ) : null}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button
              className="flex items-center  text-red-600 justify-center bg-[#00eaff] hover:text-[#0a085a] hover:bg-blue-500 hover:font-bold duration-150 w-[200px] rounded-md font-medium my-1 mx-auto px-6 py-3.5"
              onClick={() => handleButtonClick(index)}
            >
              Purchase Now
            </button>
            {selectedPlan === index && (
              <div className=" bg-blue-500 p-4 rounded-md text-black mt-[-325px]">
                <form onSubmit={handleSubmit} ref={formRef}>
                  <p className="flex justify-center">Confirmation:</p>
                  <p>Phone No: <input type="tel" name="number" maxLength={12} placeholder="Enter Your Phone Number" /></p>
                  <p>Submit the mentioned fee and send a Screenshort:</p>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .pdf, .doc, .docx"
                    onChange={handleScreenshotChange}
                    className="border rounded p-2"
                  />
                  <div className="flex justify-center items-center bg-blue-800 mt-2 font-bold py-2 rounded-md">
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {submitted && (
                  <div className="text-white bg-neutral-950 font-bold p-2 mt-2 text-center rounded-md">
                    <p>Thank you for joining us!</p>
                    <p>Our trainer will contact you soon.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
