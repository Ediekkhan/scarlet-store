import React from 'react';
import flag from '../assets/img/niaja.png'
interface CheckoutFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  country: string;
  city: string;
  address: string;
  cardHolderName: string;
  cardNumber: string;
  cvv: string;
  expiryDate: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    address: '',
    cardHolderName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally, you can reset the form fields after submission
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      country: '',
      city: '',
      address: '',
      cardHolderName: '',
      cardNumber: '',
      cvv: '',
      expiryDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4" >
      <h2 className="text-xl font-bold mb-4 mx-2">Customer Information</h2>
      

      <div className="mb-4 mx-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input 
          placeholder='Your email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>

      <h2 className="text-xl font-bold mb-4 mx-2">Shipping Information</h2>

      <div className=' lg:flex justify-between '>
      <div className="mb-4 mx-2 ">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          placeholder='Your firstname'
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div> 
      <div className="mb-4 mx-2 ">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
        placeholder='Your lastname'
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>

      </div>


      <div className="mb-4 mx-2">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        
        <div className='flex '>


      <div className="m-1 flex px-3 py-2 w-24 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
>

            <img src={flag} alt="flag" className=' mx-1' />
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_64_326)">
            <path d="M12.4999 6C13.0679 6 13.3646 6.65733 13.0219 7.082L12.9713 7.138L8.97126 11.138C8.85647 11.2528 8.70373 11.3217 8.54172 11.3319C8.3797 11.3421 8.21953 11.2928 8.09126 11.1933L8.02859 11.138L4.02859 7.138L3.97326 7.07533L3.93726 7.024L3.90126 6.96L3.88993 6.936L3.87193 6.89133L3.85059 6.81933L3.84393 6.784L3.83726 6.744L3.83459 6.706V6.62733L3.83793 6.58867L3.84393 6.54867L3.85059 6.514L3.87193 6.442L3.88993 6.39733L3.93659 6.30933L3.97993 6.24933L4.02859 6.19533L4.09126 6.14L4.14259 6.104L4.20659 6.068L4.23059 6.05667L4.27526 6.03867L4.34726 6.01733L4.38259 6.01067L4.42259 6.004L4.46059 6.00133L12.4999 6Z" fill="#9CA3AF"/>
            </g>
            <defs>
            <clipPath id="clip0_64_326">
            <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
            </svg>


        </div>

            <input
            defaultValue={'+234'}
            placeholder='+234'
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="m-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
            required

            />
        </div>       



      </div>
      
      <div className='lg:flex justify-between'>
          <div className="mb-4 mx-2">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <input
        placeholder='Your Country'
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      <div className="mb-4 mx-2">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City
        </label>
        <input
          type="text"
          placeholder='Your city'
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      </div>
      
      <div className="mb-4 mx-2">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          placeholder='Your address'
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      
      <h2 className="lg:text-xl font-bold mb-2 mx-2">Payment Information</h2>
      <p className="text-xs  mb-4 mx-2 text-gray-500">Enter your Visa or Mastercard details</p>
      <div className="mb-4 mx-2">
        <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">
          Card Holder Name
        </label>
        <input
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          placeholder='Enter the name on the card'
          value={formData.cardHolderName}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      <div className="mb-4 mx-2">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder='1234 5678 9123'
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      
      <div className='lg:flex justify-between'>
      <div className="mb-4 mx-2">
        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          placeholder='123'
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      <div className="mb-4 mx-2">
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
          Expiry Date 
        </label>
        <input
          type="text"
          placeholder='(MM/YY)'
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D95F27] focus:border-[#D95F27] sm:text-sm"
          required
        />
      </div>
      </div>
      
      <button
        type="submit"
        className="bg-[#D95F27] text-white w-full px-4 my-4 py-4 rounded text-md font-bold hover:bg-[#D95F27]"
      >
        Confrim Payment
      </button>
    </form>
  );
};

export default CheckoutForm;
